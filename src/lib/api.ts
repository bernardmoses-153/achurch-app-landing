const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export async function fetchSession(sessionId: string) {
  const res = await fetch(`${API_URL}/api/giving/session/${sessionId}`, { cache: 'no-store' });
  if (!res.ok) throw new Error((await res.json()).detail || 'Session not found');
  return res.json();
}

export async function confirmPayment(sessionId: string, paymentMethodId: string, paymentMethodType: string) {
  const res = await fetch(`${API_URL}/api/giving/session/${sessionId}/confirm`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ payment_method_id: paymentMethodId, payment_method_type: paymentMethodType }),
  });
  if (!res.ok) throw new Error((await res.json()).detail || 'Payment failed');
  return res.json();
}
