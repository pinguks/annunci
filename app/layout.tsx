import "../styles/globals.css";

import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        <header className="py-3 px-6 shadow-md">
          <Link href="/">
            <Image
              src="/tomasi-logo-red.svg"
              alt="logo"
              height={56}
              width={168}
            />
          </Link>
        </header>

        {children}
      </body>
    </html>
  );
}
