import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: " Manoj Sravan | Full-Stack Product Engineer, Startup MVP & SaaS Developer ",
  description:
    "I help founders build MVPs, SaaS platforms, dashboards, and high-performance web apps. Solo full-stack product engineer with real startup experience — delivering fast, scalable, production-ready builds.",
  keywords: [
    "startup MVP developer",
    "SaaS developer",
    "full-stack product engineer",
    "hire Next.js developer",
    "freelance MERN stack developer India",
    "startup web app development",
    "MVP development for founders",
    "solo developer for startups",
    "React developer India",
    "Node.js developer India",
    "founder focused developer",
  ],
  authors: [{ name: "Manoj Sravan" }],
  creator: "Manoj Sravan",
  publisher: "Manoj Sravan",
  openGraph: {
    title: "Startup MVP & SaaS Developer — Manoj Sravan",
    description:
      "Helping founders build and ship MVPs, SaaS products, and scalable web apps fast. Founder-first engineering.",
    url: "https://yourdomain.com",
    siteName: "Manoj Sravan — Founder-Focused Developer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Manoj Sravan — Startup MVP & SaaS Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Startup MVP & SaaS Developer — Manoj Sravan",
    description:
      "Solo full-stack developer helping founders build and ship products fast.",
    images: ["/og-image.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
       <head>
        <script defer src="https://cloud.umami.is/script.js" data-website-id="4cb71f01-e6b6-46b9-8bd4-f9cf33392265"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
