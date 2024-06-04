import { Metadata } from 'next';
import Image from 'next/image';
import './globals.css';
import CustomLink from './CustomLink'; // Import your custom link component

export const metadata: Metadata = {
  title: 'Upperhand League',
  description: 'Splash page for Upperhand League',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; style-src 'self'; script-src 'self'; frame-src https://www.youtube.com; img-src 'self' data:; connect-src 'self'; font-src 'self';" />
      </head>
      <body className="flex flex-col min-h-screen bg-background text-white">
        <header className="flex justify-center py-4 bg-black">

          <div className="pr-4 flex items-center">
            <CustomLink href="https://discord.gg/KRrbPDCrjw">
              <Image
                src="/discord-white-icon.svg"
                alt="Discord"
                width={50}
                height={40}
              />
            </CustomLink>
            <CustomLink href="/">
              <Image
                src="/UHL_Main_Logo.svg"
                alt="Logo"
                width={450}
                height={250}
              />
            </CustomLink>
          </div>
        </header>
        <main className="flex-grow flex items-center justify-center">
          {children}
        </main>
        <footer className="flex justify-center py-4 bg-black text-primary">
          <p>&copy; 2024 UpperHand League. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
