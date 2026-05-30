import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import Script from 'next/script';
import "./globals.css";
import { ThemeProvider } from "@/lib/theme";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-G3SEY1VPWX";

export const metadata: Metadata = {
  metadataBase: new URL("https://mwadev.me"),
  title: {
    default: "AI Full-Stack Developer for Hire | Next.js, FastAPI, Supabase",
    template: "%s | MWA Dev",
  },
  description: "Next.js, Supabase, and FastAPI developer with 5 live products shipped. I build production-ready SaaS MVPs and AI integrations for remote clients. Available for contract work.",
  keywords: [
    "hire next.js developer",
    "fastapi developer",
    "supabase expert",
    "ai developer for hire",
    "remote full stack developer",
    "freelance next.js developer",
    "postgresql backend developer",
    "api development services",
    "muhammed waqar ahmed",
    "mwadev",
  ],
  authors: [{ name: "Muhammed Waqar Ahmed" }],
  creator: "Muhammed Waqar Ahmed",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "AI Full-Stack Developer for Hire | Next.js, FastAPI, Supabase",
    description: "Next.js, Supabase, and FastAPI developer with 5 live products shipped. I build production-ready SaaS MVPs and AI integrations for remote clients. Available for contract work.",
    url: "https://mwadev.me",
    siteName: "mwadev.me",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MWA Dev – AI Full-Stack Developer | Next.js · FastAPI · Supabase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Full-Stack Developer for Hire | Next.js, FastAPI, Supabase",
    description: "Next.js, Supabase, and FastAPI developer with 5 live products shipped. I build production-ready SaaS MVPs and AI integrations for remote clients. Available for contract work.",
    creator: "@mwadev",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="ava-verification"
          src="https://d2mvefebd70kbz.cloudfront.net/scripts/019e7ac5-088e-7580-a59d-ac797a2c0b2b.js"
          strategy="beforeInteractive"
          async
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-white dark:bg-gray-900 transition-colors duration-300`}>
        <ThemeProvider>
          {gaId && (
            <>
              <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
                strategy="afterInteractive"
              />
              <Script id="ga4-init" strategy="afterInteractive">
                {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gaId}', { page_path: window.location.pathname });`}
              </Script>
            </>
          )}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
