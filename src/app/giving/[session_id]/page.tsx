import type { Metadata } from 'next';
import { fetchSession } from '@/lib/api';
import PaymentForm from './PaymentForm';

export const metadata: Metadata = {
  title: 'Secure Giving — A Church App',
  other: {
    'referrer': 'no-referrer',
  },
};

interface GivingPageProps {
  params: Promise<{ session_id: string }>;
}

export default async function GivingPage({ params }: GivingPageProps) {
  const { session_id } = await params;

  let session;
  try {
    session = await fetchSession(session_id);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Something went wrong';

    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 rounded-full bg-[rgba(220,38,38,0.12)] flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-accent"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold mb-3">Unable to Load Session</h1>
          <p className="text-text-muted mb-2">{message}</p>
          <p className="text-text-muted text-sm">
            This giving session may have expired or already been completed. Please return to the
            app and try again.
          </p>
        </div>
      </div>
    );
  }

  const {
    church_name,
    church_logo_url,
    fund_name,
    amount,
    frequency,
    stripe_client_secret,
    stripe_publishable_key,
  } = session;

  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount / 100);

  const frequencyLabel =
    frequency === 'one_time'
      ? 'One-time gift'
      : frequency === 'weekly'
        ? 'Weekly'
        : frequency === 'biweekly'
          ? 'Every 2 weeks'
          : frequency === 'monthly'
            ? 'Monthly'
            : frequency;

  return (
    <>
      <head>
        <meta name="referrer" content="no-referrer" />
      </head>
      <div className="min-h-screen flex flex-col items-center px-4 py-10 sm:py-16">
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          {church_logo_url && (
            <img
              src={church_logo_url}
              alt={church_name}
              className="w-14 h-14 rounded-xl mb-3 object-cover"
            />
          )}
          <h1 className="text-xl font-bold mb-1">{church_name}</h1>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[rgba(34,197,94,0.12)] text-[#22c55e] rounded-full text-xs font-semibold">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
            Secure Giving
          </div>
        </div>

        {/* Gift Summary */}
        <div className="w-full max-w-md mb-6">
          <div className="bg-surface border border-border rounded-2xl p-6">
            <h2 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">
              Gift Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-text-muted text-sm">Fund</span>
                <span className="font-medium text-sm">{fund_name}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-muted text-sm">Amount</span>
                <span className="font-bold text-lg">{formattedAmount}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-muted text-sm">Frequency</span>
                <span className="font-medium text-sm">{frequencyLabel}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Form */}
        <div className="w-full max-w-md">
          <PaymentForm
            sessionId={session_id}
            clientSecret={stripe_client_secret}
            publishableKey={stripe_publishable_key}
            amountCents={amount}
          />
        </div>

        {/* Footer note */}
        <p className="text-text-muted text-xs mt-8 text-center max-w-sm">
          Your payment is processed securely by Stripe. A Church App never stores your card details.
        </p>
      </div>
    </>
  );
}
