import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from "@/lib/theme";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mwadev.me"),
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
      <body className={`${inter.variable} font-sans antialiased bg-white dark:bg-gray-900 transition-colors duration-300`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
