import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Aidera – Smarter AI. Simpler Future.",
  description:
    "Aidera is an AI-powered platform designed to simplify healthcare and innovation. Access AI-driven insights, tools, and solutions to make smarter decisions with ease.",
  keywords: [
    "Aidera",
    "AI healthcare",
    "AI assistant",
    "AI tools",
    "AI innovation",
    "AI-powered platform",
    "health tech",
    "digital health",
    "AI for business",
  ],
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#0056ff",
      },
    ],
  },
  themeColor: "#0056ff",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Aidera – Smarter AI. Simpler Future.",
    description:
      "Aidera is an AI-powered platform designed to simplify healthcare and innovation.",
    url: "https://yourdomain.com",
    siteName: "Aidera",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aidera Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aidera – Smarter AI. Simpler Future.",
    description:
      "AI-powered web platform that helps you design, build, and innovate with AI-driven solutions tailored to your workflow.",
    images: ["/og-image.png"],
    creator: "@yourhandle",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${inter.style.fontFamily};
  --font-sans: ${inter.variable};
}
        `}</style>

        {/* ✅ Structured Data (JSON-LD) for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Aidera",
              description:
                "AI-powered web platform that helps you design, build, and innovate with AI-driven solutions tailored to your workflow.",
              applicationCategory: "AI Assistant",
              operatingSystem: "Web",
              url: "https://yourdomain.com",
              image: "https://yourdomain.com/og-image.png",
              author: {
                "@type": "Organization",
                name: "Aidera",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
