import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mc3grp.com"),
  title: {
    default: "MC3 Group | More Clarity. More Control. More Conversion.",
    template: "%s | MC3 Group",
  },
  description:
    "MC3 Group builds premium growth systems through MC3 Marketing and MC3 Labs — combining visibility, automation, analytics, and AI into one intelligent operating engine.",
  openGraph: {
    title: "MC3 Group",
    description:
      "Modern growth systems for businesses that want stronger visibility and smarter operations.",
    url: "https://mc3grp.com",
    siteName: "MC3 Group",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MC3 Group",
    description: "More Clarity. More Control. More Conversion.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
