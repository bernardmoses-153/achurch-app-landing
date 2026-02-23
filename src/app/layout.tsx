import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'A Church App — Stay Connected to Your Church All Week',
  description:
    'Find your church. Grow in faith. Stay connected all week with daily devotionals, sermon clips, and your church community.',
  openGraph: {
    title: 'A Church App — Stay Connected to Your Church All Week',
    description:
      'Daily devotionals, sermon clips, and spiritual growth tracking. Sunday is just the beginning.',
    type: 'website',
    url: 'https://www.achurch.app',
    images: ['https://www.achurch.app/og-image.png'],
  },
  icons: {
    icon: '/appicon.png',
    apple: '/appicon.png',
  },
  other: {
    'apple-itunes-app': 'app-id=6470878948',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
