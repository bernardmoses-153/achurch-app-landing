import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Terms of Service — A Church App',
};

export default function TermsPage() {
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
        <h1 className="text-[2rem] font-extrabold mb-2">Terms of Service</h1>
        <p className="text-text-muted text-sm mb-8">Last updated: February 13, 2026</p>

        <p className="text-text-body text-[0.95rem] mb-3">
          These Terms of Service (&ldquo;Terms&rdquo;) govern your use of A Church App, operated by
          153 Comeback Inc. (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). By using the app, you agree
          to these Terms.
        </p>

        <h2 className="text-[1.25rem] font-bold mt-8 mb-3">1. Account Registration</h2>
        <p className="text-text-body text-[0.95rem] mb-3">
          To use A Church App, you must create an account and associate it with a participating
          church. You are responsible for maintaining the security of your account credentials.
          You must provide accurate information during registration.
        </p>

        <h2 className="text-[1.25rem] font-bold mt-8 mb-3">2. Acceptable Use</h2>
        <p className="text-text-body text-[0.95rem] mb-3">
          You agree to use A Church App only for its intended purpose — connecting with your
          church community and engaging with spiritual content. You agree not to:
        </p>
        <ul className="pl-6 mb-3 text-text-body text-[0.95rem] list-disc">
          <li className="mb-3">Use the app for any unlawful purpose</li>
          <li className="mb-3">
            Send harassing, abusive, or inappropriate messages through the app
          </li>
          <li className="mb-3">
            Attempt to access accounts or data belonging to other users
          </li>
          <li className="mb-3">
            Reverse-engineer, copy, or redistribute the app or its content
          </li>
          <li className="mb-3">
            Upload harmful content or attempt to disrupt the service
          </li>
        </ul>

        <h2 className="text-[1.25rem] font-bold mt-8 mb-3">3. Content</h2>
        <p className="text-text-body text-[0.95rem] mb-3">
          Devotional content, sermon clips, and other materials delivered through the app are
          created by your church and its pastoral staff. We provide the platform but do not
          author or endorse specific religious content. Your church retains ownership of its
          content.
        </p>
        <p className="text-text-body text-[0.95rem] mb-3">
          Personal notes you add within the app are private to your account. Reactions and
          engagement data may be visible to your church&apos;s staff.
        </p>

        <h2 className="text-[1.25rem] font-bold mt-8 mb-3">4. Privacy</h2>
        <p className="text-text-body text-[0.95rem] mb-3">
          Your use of the app is also governed by our{' '}
          <Link href="/privacy" className="text-accent">
            Privacy Policy
          </Link>
          . By using the app, you consent to the collection and use of information as described
          therein.
        </p>

        <h2 className="text-[1.25rem] font-bold mt-8 mb-3">5. Account Deletion</h2>
        <p className="text-text-body text-[0.95rem] mb-3">
          You may delete your account at any time through the Profile screen in the app. Account
          deletion is processed within 30 days, during which time you may contact us to reverse
          the decision. After 30 days, your personal data will be permanently removed.
        </p>

        <h2 className="text-[1.25rem] font-bold mt-8 mb-3">6. Service Availability</h2>
        <p className="text-text-body text-[0.95rem] mb-3">
          We strive to keep A Church App available at all times, but we do not guarantee
          uninterrupted service. We may perform maintenance, updates, or modifications that
          temporarily affect availability.
        </p>

        <h2 className="text-[1.25rem] font-bold mt-8 mb-3">7. Intellectual Property</h2>
        <p className="text-text-body text-[0.95rem] mb-3">
          A Church App, including its design, code, and branding, is the property of 153 Comeback
          Inc. You are granted a limited, non-exclusive, non-transferable license to use the app
          for personal, non-commercial purposes.
        </p>

        <h2 className="text-[1.25rem] font-bold mt-8 mb-3">8. Disclaimer of Warranties</h2>
        <p className="text-text-body text-[0.95rem] mb-3">
          The app is provided &ldquo;as is&rdquo; without warranties of any kind, express or implied. We
          do not warrant that the app will be error-free or meet your specific expectations.
        </p>

        <h2 className="text-[1.25rem] font-bold mt-8 mb-3">9. Limitation of Liability</h2>
        <p className="text-text-body text-[0.95rem] mb-3">
          To the fullest extent permitted by law, 153 Comeback Inc. shall not be liable for any
          indirect, incidental, or consequential damages arising from your use of the app.
        </p>

        <h2 className="text-[1.25rem] font-bold mt-8 mb-3">10. Changes to These Terms</h2>
        <p className="text-text-body text-[0.95rem] mb-3">
          We may update these Terms from time to time. Continued use of the app after changes
          constitutes acceptance of the updated Terms.
        </p>

        <h2 className="text-[1.25rem] font-bold mt-8 mb-3">11. Contact Us</h2>
        <p className="text-text-body text-[0.95rem] mb-3">
          If you have questions about these Terms, contact us at:
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
