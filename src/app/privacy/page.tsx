import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Privacy Policy — A Church App',
};

export default function PrivacyPage() {
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
        <h1 className="text-[2rem] font-extrabold mb-2">Privacy Policy</h1>
        <p className="text-text-muted text-sm mb-8">Last updated: February 13, 2026</p>

        <p className="text-text-body text-[0.95rem] mb-3">
          153 Comeback Inc. (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) operates A Church App.
          This Privacy Policy explains how we collect, use, and protect your information when you
          use our mobile application.
        </p>

        <h2 className="text-[1.25rem] font-bold mt-8 mb-3">Information We Collect</h2>
        <p className="text-text-body text-[0.95rem] mb-3">
          When you create an account, we collect:
        </p>
        <ul className="pl-6 mb-3 text-text-body text-[0.95rem] list-disc">
          <li className="mb-3">Name and email address</li>
          <li className="mb-3">Church affiliation</li>
          <li className="mb-3">Spiritual stage selection (optional)</li>
          <li className="mb-3">Phone number and address (if provided)</li>
        </ul>
        <p className="text-text-body text-[0.95rem] mb-3">We also automatically collect:</p>
        <ul className="pl-6 mb-3 text-text-body text-[0.95rem] list-disc">
          <li className="mb-3">Device information (device type, operating system)</li>
          <li className="mb-3">App usage data (features used, content viewed)</li>
          <li className="mb-3">Push notification tokens (if you opt in)</li>
        </ul>

        <h2 className="text-[1.25rem] font-bold mt-8 mb-3">How We Use Your Information</h2>
        <ul className="pl-6 mb-3 text-text-body text-[0.95rem] list-disc">
          <li className="mb-3">To provide personalized daily devotional content</li>
          <li className="mb-3">To connect you with your church community and staff</li>
          <li className="mb-3">
            To track your spiritual growth progress (streaks, completions)
          </li>
          <li className="mb-3">
            To send push notifications about new content (with your permission)
          </li>
          <li className="mb-3">To improve and maintain our services</li>
        </ul>

        <h2 className="text-[1.25rem] font-bold mt-8 mb-3">Information Sharing</h2>
        <p className="text-text-body text-[0.95rem] mb-3">
          We do not sell your personal information. We may share limited information with:
        </p>
        <ul className="pl-6 mb-3 text-text-body text-[0.95rem] list-disc">
          <li className="mb-3">
            <strong>Your church:</strong> Your name, email, stage, and engagement activity are
            visible to your church&apos;s pastoral staff through their admin dashboard.
          </li>
          <li className="mb-3">
            <strong>Service providers:</strong> We use third-party services for hosting, analytics,
            and notifications (e.g., Supabase, Firebase Cloud Messaging).
          </li>
        </ul>

        <h2 className="text-[1.25rem] font-bold mt-8 mb-3">Data Security</h2>
        <p className="text-text-body text-[0.95rem] mb-3">
          We use industry-standard security measures including encryption in transit (TLS) and at
          rest to protect your data. Access to personal information is restricted to authorized
          personnel only.
        </p>

        <h2 className="text-[1.25rem] font-bold mt-8 mb-3">Your Rights</h2>
        <p className="text-text-body text-[0.95rem] mb-3">You may:</p>
        <ul className="pl-6 mb-3 text-text-body text-[0.95rem] list-disc">
          <li className="mb-3">
            Access, update, or correct your personal information through the app
          </li>
          <li className="mb-3">Delete your account at any time from the Profile screen</li>
          <li className="mb-3">
            Opt out of push notifications through your device settings
          </li>
          <li className="mb-3">Request a copy of your data by contacting us</li>
        </ul>

        <h2 className="text-[1.25rem] font-bold mt-8 mb-3">Children&apos;s Privacy</h2>
        <p className="text-text-body text-[0.95rem] mb-3">
          A Church App is not intended for children under 13. We do not knowingly collect
          information from children under 13. If you believe we have collected such information,
          please contact us immediately.
        </p>

        <h2 className="text-[1.25rem] font-bold mt-8 mb-3">Changes to This Policy</h2>
        <p className="text-text-body text-[0.95rem] mb-3">
          We may update this Privacy Policy from time to time. We will notify you of significant
          changes through the app or by email.
        </p>

        <h2 className="text-[1.25rem] font-bold mt-8 mb-3">Contact Us</h2>
        <p className="text-text-body text-[0.95rem] mb-3">
          If you have questions about this Privacy Policy, contact us at:
        </p>
        <p className="text-text-body text-[0.95rem] mb-3">
          153 Comeback Inc.
          <br />
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
