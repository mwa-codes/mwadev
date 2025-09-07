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
  title: "Muhammed Waqar - Always Developing | mwadev.me",
  description: "Follow my journey from student to professional developer. Web development, AI, IoT projects and learning experiences.",
  keywords: ["Muhammed Waqar", "Web Developer", "Next.js", "React", "AI", "IoT", "Student Developer"],
  authors: [{ name: "Muhammed Waqar" }],
  creator: "Muhammed Waqar",
  openGraph: {
    title: "Muhammed Waqar - Always Developing",
    description: "Follow my journey from student to professional developer",
    url: "https://mwadev.me",
    siteName: "mwadev.me",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammed Waqar - Always Developing",
    description: "Follow my journey from student to professional developer",
    creator: "@muhammed_waqar",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
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
