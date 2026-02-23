'use client';

import { useState, useCallback, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { confirmPayment } from '@/lib/api';

interface PaymentFormProps {
  sessionId: string;
  clientSecret: string;
  publishableKey: string;
  amountCents: number;
}

// Fee calculation constants
const CARD_RATE = 0.029;
const CARD_FIXED = 30; // cents
const ACH_RATE = 0.008;
const ACH_FIXED = 0; // cents
const ACH_CAP = 500; // cents ($5 cap)

function calculateFee(amountCents: number, method: 'card' | 'us_bank_account'): number {
  if (method === 'us_bank_account') {
    const fee = Math.round(amountCents * ACH_RATE) + ACH_FIXED;
    return Math.min(fee, ACH_CAP);
  }
  return Math.round(amountCents * CARD_RATE) + CARD_FIXED;
}

function formatCurrency(cents: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(cents / 100);
}

function CheckoutForm({
  sessionId,
  amountCents,
}: {
  sessionId: string;
  amountCents: number;
}) {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentMethod, setPaymentMethod] = useState<'card' | 'us_bank_account'>('card');
  const [coverFee, setCoverFee] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [donationId, setDonationId] = useState<string | null>(null);
  const [countdown, setCountdown] = useState(3);

  const fee = calculateFee(amountCents, paymentMethod);
  const total = coverFee ? amountCents + fee : amountCents;

  // Auto-redirect after success
  useEffect(() => {
    if (!success || !donationId) return;

    if (countdown <= 0) {
      window.location.href = `operatingchurch://giving/confirmation/${donationId}`;
      return;
    }

    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [success, donationId, countdown]);

  const handlePaymentMethodChange = useCallback((event: { value: { type: string } }) => {
    const type = event.value.type;
    if (type === 'us_bank_account') {
      setPaymentMethod('us_bank_account');
    } else {
      setPaymentMethod('card');
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setError(null);

    try {
      // Confirm with Stripe
      const { error: stripeError, paymentIntent } = await stripe.confirmPayment({
        elements,
        redirect: 'if_required',
        confirmParams: {
          return_url: window.location.href,
        },
      });

      if (stripeError) {
        setError(stripeError.message || 'Payment failed. Please try again.');
        setLoading(false);
        return;
      }

      if (!paymentIntent) {
        setError('Payment failed. Please try again.');
        setLoading(false);
        return;
      }

      // Confirm with backend
      const result = await confirmPayment(
        sessionId,
        paymentIntent.payment_method as string,
        paymentMethod
      );

      setDonationId(result.donation_id);
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 rounded-full bg-[rgba(34,197,94,0.12)] flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-[#22c55e]"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
        <p className="text-text-muted mb-4">Your gift has been received.</p>
        <p className="text-text-muted text-sm">
          Returning to the app in {countdown}...
        </p>
        <a
          href={`operatingchurch://giving/confirmation/${donationId}`}
          className="inline-block mt-4 text-accent text-sm font-medium"
        >
          Return to app now
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Payment Element */}
      <div className="bg-surface border border-border rounded-2xl p-6 mb-4">
        <PaymentElement
          onChange={handlePaymentMethodChange}
          options={{
            layout: 'tabs',
          }}
        />
      </div>

      {/* Fee Transparency */}
      <div className="bg-surface border border-border rounded-2xl p-6 mb-4">
        <div className="flex items-start gap-3 mb-4">
          <button
            type="button"
            role="switch"
            aria-checked={coverFee}
            onClick={() => setCoverFee(!coverFee)}
            className={`relative shrink-0 mt-0.5 h-6 w-11 rounded-full transition-colors ${
              coverFee ? 'bg-accent' : 'bg-[#2a2a3a]'
            }`}
          >
            <span
              className={`block h-5 w-5 rounded-full bg-white transition-transform ${
                coverFee ? 'translate-x-[22px]' : 'translate-x-[2px]'
              }`}
            />
          </button>
          <div>
            <p className="text-sm font-medium mb-0.5">Cover the processing fee</p>
            <p className="text-text-muted text-xs leading-relaxed">
              Help your church receive the full amount. The{' '}
              {paymentMethod === 'us_bank_account' ? 'bank transfer' : 'card'} fee is{' '}
              {formatCurrency(fee)}.
            </p>
          </div>
        </div>

        {/* Breakdown */}
        <div className="border-t border-border pt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-text-muted">Gift amount</span>
            <span>{formatCurrency(amountCents)}</span>
          </div>
          {coverFee && (
            <div className="flex justify-between text-sm">
              <span className="text-text-muted">Processing fee</span>
              <span>{formatCurrency(fee)}</span>
            </div>
          )}
          <div className="flex justify-between text-sm font-bold pt-1 border-t border-border">
            <span>Total</span>
            <span>{formatCurrency(total)}</span>
          </div>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="bg-[rgba(220,38,38,0.08)] border border-[rgba(220,38,38,0.2)] rounded-xl px-4 py-3 mb-4">
          <p className="text-accent text-sm">{error}</p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={!stripe || !elements || loading}
        className="w-full bg-accent text-white font-bold py-4 px-6 rounded-xl text-base transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Processing...
          </span>
        ) : (
          `Give ${formatCurrency(total)}`
        )}
      </button>
    </form>
  );
}

export default function PaymentForm({
  sessionId,
  clientSecret,
  publishableKey,
  amountCents,
}: PaymentFormProps) {
  const stripePromise = loadStripe(publishableKey);

  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret,
        appearance: {
          theme: 'night',
          variables: {
            colorPrimary: '#dc2626',
            colorBackground: '#111118',
            colorText: '#fafafa',
            colorTextSecondary: '#8a8a9a',
            colorDanger: '#dc2626',
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
            borderRadius: '12px',
            colorTextPlaceholder: '#555566',
          },
          rules: {
            '.Input': {
              backgroundColor: '#0a0a0f',
              border: '1px solid #1e1e2a',
              boxShadow: 'none',
            },
            '.Input:focus': {
              border: '1px solid #dc2626',
              boxShadow: '0 0 0 1px #dc2626',
            },
            '.Tab': {
              backgroundColor: '#0a0a0f',
              border: '1px solid #1e1e2a',
            },
            '.Tab--selected': {
              backgroundColor: '#111118',
              border: '1px solid #dc2626',
            },
            '.Label': {
              color: '#8a8a9a',
            },
          },
        },
      }}
    >
      <CheckoutForm sessionId={sessionId} amountCents={amountCents} />
    </Elements>
  );
}
