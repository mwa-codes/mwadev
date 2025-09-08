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
  title: "Muhammed Waqar Ahmed",
  description: "Personal website of Muhammed Waqar Ahmed — sharing my journey as a data science student, developer, and entrepreneur. Explore projects in AI, IoT, and full-stack development, along with insights from learning, building, and growing in technology and life.",
  keywords: ["Muhammed Waqar Ahmed", "MWA developer", "mwadev", "AI developer portfolio", "AI projects", "IoT projects", "Next.js developer", "Full-stack developer", "Data science student", "AI resume analyzer", "AI chatbot Developer", "Freelance developer portfolio"],
  authors: [{ name: "Muhammed Waqar Ahmed" }],
  creator: "Muhammed Waqar Ahmed",
  openGraph: {
    title: "Muhammed Waqar Ahmed — Developer, Learner, Entrepreneur",
    description: "Exploring technology and life through learning, building, and growing. Discover my projects in AI, IoT, and full-stack development, and follow my journey as a student, freelancer, and entrepreneur.",
    url: "https://mwadev.me",
    siteName: "mwadev.me",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Muhammed Waqar Ahmed",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 transition-colors duration-300`}
      >
        <ThemeProvider defaultTheme="system" storageKey="mwadev-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
