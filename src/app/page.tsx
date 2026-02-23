import Link from 'next/link';
import Image from 'next/image';

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.97 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
  </svg>
);

const features = [
  {
    icon: '\u26FD',
    iconBg: 'rgba(59,130,246,0.12)',
    iconColor: '#3b82f6',
    title: 'Find Your Church',
    description:
      'Search for churches in your area, view profiles, and get connected instantly. Join your community with a simple sign-up.',
  },
  {
    icon: '\uD83D\uDCD6',
    iconBg: 'rgba(220,38,38,0.12)',
    iconColor: '#dc2626',
    title: 'Daily Devotionals',
    description:
      "Receive daily readings from your pastor's latest sermon. Scripture, reflection questions, and practical next steps — every day of the week.",
  },
  {
    icon: '\uD83C\uDFA5',
    iconBg: 'rgba(168,85,247,0.12)',
    iconColor: '#a855f7',
    title: 'Sermon Video Clips',
    description:
      'Watch the most powerful moments from each sermon. Short, shareable clips you can send to friends and family.',
  },
  {
    icon: '\uD83D\uDD25',
    iconBg: 'rgba(249,115,22,0.12)',
    iconColor: '#f97316',
    title: 'Track Your Growth',
    description:
      'Build a daily streak, see your weekly progress, and celebrate milestones as you journey through stages of faith.',
  },
  {
    icon: '\uD83D\uDCAC',
    iconBg: 'rgba(34,197,94,0.12)',
    iconColor: '#22c55e',
    title: 'Stay Connected',
    description:
      "Browse your church's staff directory, message your pastor directly, and engage with devotionals alongside your church family.",
  },
  {
    icon: '\uD83D\uDD16',
    iconBg: 'rgba(236,72,153,0.12)',
    iconColor: '#ec4899',
    title: 'Personal Reflections',
    description:
      'Add private notes on any devotional, bookmark your favorites, and build a personal library of spiritual insights.',
  },
];

const stages = [
  { num: 1, label: 'First Visit', bg: 'rgba(59,130,246,0.15)', color: '#3b82f6' },
  { num: 2, label: 'Gospel Presented', bg: 'rgba(168,85,247,0.15)', color: '#a855f7' },
  { num: 3, label: 'Saved', bg: 'rgba(220,38,38,0.15)', color: '#dc2626' },
  { num: 4, label: 'Baptized', bg: 'rgba(6,182,212,0.15)', color: '#06b6d4' },
  { num: 5, label: 'Member', bg: 'rgba(34,197,94,0.15)', color: '#22c55e' },
  { num: 6, label: 'Discipleship', bg: 'rgba(249,115,22,0.15)', color: '#f97316' },
  { num: 7, label: 'Ready to Serve', bg: 'rgba(236,72,153,0.15)', color: '#ec4899' },
  { num: 8, label: 'Serving', bg: 'rgba(234,179,8,0.15)', color: '#eab308' },
];

export default function HomePage() {
  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-[rgba(10,10,15,0.85)] backdrop-blur-[20px] border-b border-border">
        <div className="max-w-[1100px] mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 no-underline text-text">
            <Image
              src="/appicon.png"
              alt="A Church App"
              width={36}
              height={36}
              className="rounded-lg"
            />
            <span className="font-bold text-[1.1rem]">A Church App</span>
          </Link>
          <a
            href="https://apps.apple.com/us/app/a-church-app/id6470878948"
            className="inline-flex items-center gap-2 bg-text text-bg px-5 py-2 rounded-full no-underline font-semibold text-sm transition-opacity hover:opacity-90"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.97 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
            </svg>
            Download
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 text-center max-w-[800px] mx-auto sm:pt-[6.5rem]">
        <div className="inline-block px-4 py-1.5 bg-accent-soft text-accent rounded-full text-[0.8rem] font-semibold mb-6 border border-[rgba(220,38,38,0.2)]">
          Sunday is just the beginning
        </div>
        <h1 className="text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold leading-[1.1] mb-5 tracking-[-0.03em]">
          Stay connected to{' '}
          <em className="not-italic bg-gradient-to-br from-[#dc2626] to-[#f97316] bg-clip-text text-transparent">
            your church
          </em>{' '}
          all week long
        </h1>
        <p className="text-[1.2rem] text-text-muted max-w-[560px] mx-auto mb-8">
          Daily devotionals from your pastor, sermon highlights, and spiritual growth tracking
          — delivered to your phone every day.
        </p>
        <div className="flex gap-4 justify-center flex-wrap max-sm:flex-col max-sm:items-center">
          <a
            href="https://apps.apple.com/us/app/a-church-app/id6470878948"
            className="inline-flex items-center gap-2 bg-text text-bg px-8 py-3.5 rounded-xl no-underline font-bold text-base transition-all hover:-translate-y-0.5 hover:opacity-95 max-sm:w-full max-sm:justify-center"
          >
            <AppleIcon />
            Download on the App Store
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 bg-transparent text-text px-8 py-3.5 rounded-xl no-underline font-semibold text-base border border-border transition-colors hover:bg-surface max-sm:w-full max-sm:justify-center"
          >
            See Features
          </a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 px-6 max-w-[1100px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[2rem] font-extrabold mb-3 tracking-[-0.02em]">
            Everything you need to grow in faith
          </h2>
          <p className="text-text-muted text-[1.1rem]">
            Your church community, right in your pocket
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-surface border border-border rounded-2xl p-8 transition-colors hover:border-[#2a2a3a]"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-2xl"
                style={{ background: feature.iconBg }}
              >
                <span style={{ color: feature.iconColor }}>{feature.icon}</span>
              </div>
              <h3 className="text-[1.15rem] font-bold mb-2">{feature.title}</h3>
              <p className="text-text-muted text-[0.925rem] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Journey */}
      <section id="journey" className="py-16 px-6 max-w-[800px] mx-auto">
        <h2 className="text-[2rem] font-extrabold text-center mb-3 tracking-[-0.02em]">
          Meet you where you are
        </h2>
        <p className="text-center text-text-muted mb-10 text-[1.1rem]">
          Whether you&apos;re visiting for the first time or leading others, content is tailored
          to your stage of growth.
        </p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3 max-sm:grid-cols-1">
          {stages.map((stage) => (
            <div
              key={stage.num}
              className="flex items-center gap-3.5 px-5 py-4 bg-surface border border-border rounded-xl"
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-[0.8rem] shrink-0"
                style={{ background: stage.bg, color: stage.color }}
              >
                {stage.num}
              </div>
              <span className="text-[0.925rem] font-medium">{stage.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-[640px] mx-auto bg-gradient-to-br from-[rgba(220,38,38,0.08)] to-[rgba(249,115,22,0.06)] border border-[rgba(220,38,38,0.15)] rounded-3xl py-14 px-8">
          <h2 className="text-[2rem] font-extrabold mb-3 tracking-[-0.02em]">
            Start your journey today
          </h2>
          <p className="text-text-muted text-[1.1rem] mb-8">
            Download A Church App and stay plugged into your church community every day of the
            week.
          </p>
          <a
            href="https://apps.apple.com/us/app/a-church-app/id6470878948"
            className="inline-flex items-center gap-2 bg-text text-bg px-8 py-3.5 rounded-xl no-underline font-bold text-base transition-all hover:-translate-y-0.5 hover:opacity-95"
          >
            <AppleIcon />
            Download on the App Store
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-border text-center">
        <div className="max-w-[1100px] mx-auto flex items-center justify-between flex-wrap gap-4 max-sm:flex-col max-sm:text-center">
          <span className="text-text-muted text-[0.85rem]">
            &copy; 2026 153 Comeback Inc. All rights reserved.
          </span>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-text-muted no-underline text-[0.85rem] transition-colors hover:text-text"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-text-muted no-underline text-[0.85rem] transition-colors hover:text-text"
            >
              Terms of Service
            </Link>
            <Link
              href="/support"
              className="text-text-muted no-underline text-[0.85rem] transition-colors hover:text-text"
            >
              Support
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
