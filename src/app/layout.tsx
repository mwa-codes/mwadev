import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammed Waqar Ahmed - Always Developing | mwadev.me",
  description: "Personal website of Muhammed Waqar Ahmed, showcasing my journey from student to professional developer. Explore projects, insights, and more.",
  keywords: ["Muhammed Waqar Ahmed", "Web Developer", "Next.js", "React", "AI", "IoT", "Student Developer"],
  authors: [{ name: "Muhammed Waqar Ahmed" }],
  creator: "Muhammed Waqar Ahmed",
  openGraph: {
    title: "Muhammed Waqar Ahmed - Always Developing",
    description: "Personal website showcasing my development journey and projects",
    url: "https://mwadev.me",
    siteName: "mwadev.me",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Muhammed Waqar Ahmed - Always Developing",
    description: "Personal website showcasing my development journey and projects",
    creator: "@mwadev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider defaultTheme="system" storageKey="mwadev-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
