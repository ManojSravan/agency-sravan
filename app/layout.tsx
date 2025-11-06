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
  title: "Sravan Tech Labs | Product Studio for Startups, SMBs & Enterprises",
  description:
    "Sravan Tech Labs is a product studio helping startups, SMBs, and enterprises design, build, and scale digital products — from MVPs to full-fledged SaaS platforms. We turn business ideas into fast, scalable, production-ready web applications.",
  keywords: [
    "product studio India",
    "startup MVP development",
    "SaaS product development",
    "custom web app development",
    "Next.js development company",
    "React and Node.js developers",
    "MERN stack development agency",
    "SMB software development",
    "enterprise app development",
    "tech partner for startups",
    "hire full-stack developers",
  ],
  authors: [{ name: "Sravan Tech Labs" }],
  creator: "Sravan Tech Labs",
  publisher: "Sravan Tech Labs",
  openGraph: {
    title: "Sravan Tech Labs — Product Studio for Startups, SMBs & Enterprises",
    description:
      "We build scalable MVPs, SaaS platforms, and digital solutions that help businesses grow. From concept to deployment — your reliable tech partner.",
    url: "https://sravantechlabs.com",
    siteName: "Sravan Tech Labs",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sravan Tech Labs — Product Studio for Startups, SMBs & Enterprises",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sravan Tech Labs — Product Studio for Startups, SMBs & Enterprises",
    description:
      "We build MVPs, SaaS platforms, and digital products that power business growth. Your tech partner from idea to launch.",
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
