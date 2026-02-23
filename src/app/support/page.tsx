import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Support — A Church App',
};

const faqItems = [
  {
    question: 'How do I find my church?',
    answer:
      'When you sign up, you\'ll be prompted to search for your church by name. If your church isn\'t listed yet, ask your pastor to register at operating.church.',
    link: { text: 'operating.church', href: 'https://operating.church' },
  },
  {
    question: 'How do I reset my password?',
    answer:
      'On the sign-in screen, tap "Forgot Password" and enter your email address. You\'ll receive a password reset link within a few minutes.',
  },
  {
    question: "Why don't I see any devotionals?",
    answer:
      "Daily devotionals are generated from your pastor's sermons. If your church hasn't uploaded any sermons yet, you won't see devotional content. Encourage your pastor to get started at operating.church.",
  },
  {
    question: 'How do I change my spiritual stage?',
    answer:
      "Your spiritual stage can be updated by your church's pastoral staff. If you feel you've grown to a new stage, reach out to your pastor through the app's messaging feature or in person.",
  },
  {
    question: 'How do I delete my account?',
    answer:
      'Go to Profile, scroll down, and tap "Delete Account." Your account will be scheduled for deletion within 30 days. You can reverse this decision by contacting us within that window.',
  },
  {
    question: "I'm not receiving push notifications.",
    answer:
      "Make sure notifications are enabled for A Church App in your iPhone's Settings > Notifications. Also check that you haven't muted notifications within the app.",
  },
  {
    question: 'Is my data private?',
    answer:
      "Yes. Your personal notes are visible only to you. Your church's pastoral staff can see your engagement activity (like devotional completions) to help support your growth.",
    privacyLink: true,
  },
];

export default function SupportPage() {
  return (
    <>
      {/* Nav */}
      <nav className="px-6 py-4 border-b border-border">
        <div className="max-w-[800px] mx-auto flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 no-underline text-text">
            <Image
              src="/appicon.png"
              alt="A Church App"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="font-bold">A Church App</span>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-[800px] mx-auto px-6 pt-12 pb-16">
        <h1 className="text-[2rem] font-extrabold mb-2">Support</h1>
        <p className="text-text-muted text-[1.1rem] mb-10">
          We&apos;re here to help you get the most out of A Church App.
        </p>

        {/* Contact Card */}
        <div className="bg-surface border border-border rounded-2xl p-8 mb-6">
          <h3 className="text-[1.1rem] font-bold mb-2">Email Support</h3>
          <p className="text-text-body text-[0.95rem]">
            For any questions, issues, or feedback, reach out to us at{' '}
            <a href="mailto:support@153comeback.com" className="text-accent">
              support@153comeback.com
            </a>
            . We typically respond within 24 hours.
          </p>
        </div>

        {/* FAQ */}
        <h2 className="text-[1.25rem] font-bold mt-8 mb-3">Frequently Asked Questions</h2>

        {faqItems.map((item) => (
          <div
            key={item.question}
            className="bg-surface border border-border rounded-xl p-6 mb-3"
          >
            <h3 className="text-base font-semibold mb-2">{item.question}</h3>
            <p className="text-text-body text-[0.9rem]">
              {item.answer}
              {item.privacyLink && (
                <>
                  {' '}
                  Read our full{' '}
                  <Link href="/privacy" className="text-accent">
                    Privacy Policy
                  </Link>{' '}
                  for details.
                </>
              )}
            </p>
          </div>
        ))}

        {/* For Pastors */}
        <h2 className="text-[1.25rem] font-bold mt-8 mb-3">For Pastors &amp; Church Staff</h2>
        <p className="text-text-body text-[0.95rem] mb-3">
          If you&apos;re a pastor or church administrator looking to set up A Church App for your
          congregation, visit{' '}
          <a href="https://operating.church" className="text-accent">
            operating.church
          </a>{' '}
          to create your church&apos;s dashboard.
        </p>

        {/* Company */}
        <h2 className="text-[1.25rem] font-bold mt-8 mb-3">Company</h2>
        <p className="text-text-body text-[0.95rem] mb-3">
          A Church App is built by 153 Comeback Inc.
        </p>
        <p className="text-text-body text-[0.95rem] mb-3">
          Email:{' '}
          <a href="mailto:support@153comeback.com" className="text-accent">
            support@153comeback.com
          </a>
        </p>
      </div>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-border text-center text-text-muted text-[0.85rem]">
        &copy; 2026 153 Comeback Inc. All rights reserved.
      </footer>
    </>
  );
}
