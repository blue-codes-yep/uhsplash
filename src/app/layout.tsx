import { Metadata } from 'next';
import Image from 'next/image';
import './globals.css';

export const metadata: Metadata = {
  title: 'My Next.js App',
  description: 'A Next.js application with a centered YouTube video and a top logo',
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <header className="flex justify-center py-4 bg-gray-800">
          <Image
            src="/UHL_Main_Logo.svg"
            alt="Logo"
            width={150}
            height={50}
          />
        </header>
        <main className="flex items-center justify-center min-h-screen bg-gray-900">
          {children}
        </main>
      </body>
    </html>
  );
};

export default Layout;
