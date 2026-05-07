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
  description: "Hire Muhammed Waqar Ahmed for remote full-stack and AI development. I build production-ready Next.js, FastAPI, and Supabase apps for startups and businesses worldwide.",
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
    description: "Remote developer building high-performance web and AI products with Next.js, FastAPI, Supabase, and PostgreSQL.",
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
    description: "Building scalable web and AI products for remote clients worldwide.",
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
