import type { Metadata, Viewport } from "next";
import { Inter, Press_Start_2P } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
const pressStart = Press_Start_2P({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Valter 2024",
  description:
    "Welcome to the personal portfolio of Muhammad Ariq Farhan, a versatile software engineer, colorist, and RPA specialist with expertise in web and mobile app development, automation, and video editing.",
  keywords: [
    "Muhammad Ariq Farhan",
    "software engineer",
    "colorist",
    "RPA specialist",
    "web development",
    "mobile app development",
    "robotic process automation",
    "video editing",
    "portfolio",
  ],
  authors: [{ name: "Muhammad Ariq Farhan" }],
  creator: "Muhammad Ariq Farhan",
  publisher: "Muhammad Ariq Farhan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Muhammad Ariq Farhan",
    description:
      "Personal portfolio showcasing expertise in software engineering, coloring, and RPA.",
    url: "https://www.yourwebsite.com",
    siteName: "Muhammad Ariq Farhan Portfolio",
    images: [
      {
        url: "https://www.yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Ariq Farhan Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Ariq Farhan | Software Engineer & Colorist",
    description:
      "Personal portfolio showcasing expertise in software engineering, coloring, and RPA.",
    creator: "@ariqfrhan",
    images: ["https://www.yourwebsite.com/twitter-image.jpg"],
  },
  robots: "index, follow",
};

// Move the viewport configuration to its dedicated export
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
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
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-N3W96JXQNT"
        ></Script>
        <Script>
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-N3W96JXQNT');`}
        </Script>
        <meta
          name="google-site-verification"
          content="SB-3CM2udTlzDWz9PkjqPrNRjLzSIAvaarREPe6C6uY"
        />
      </head>
      <body className={pressStart.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {" "}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
