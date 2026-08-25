import type { Metadata } from 'next';
import './globals.css';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';

export const metadata: Metadata = {
  title: 'Supervise and Run your business with Artificial Intelligence | Supervisor',
  description: 'Supervisor brings AI-first workflows, team visibility, and mobile access into a focused workspace.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <SiteHeader />
        <main className="pt-16">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
