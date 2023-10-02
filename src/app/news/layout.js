import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rusty Operations | News", // Text shown in the tab
  description: "Stay up to date with our latest news and alerts!!", // Meta description for SEO
  siteName: "Rusty Operations", // Site name for SEO
  url: "https://www.rustyoperations.net", // Site URL
  authors: [
    {
      name: "Josh Helman",
      twitter: "@joshjh2002_",
      github: "https://github.com/joshjh2002",
    },
  ],
  creator: "Josh Helman",
  images: [
    {
      url: "https://www.rustyoperations.net/img/rust-banner.jpg",
      width: 1440,
      height: 720,
    },
  ],
  social: {
    twitter: "https://twitter.com/rustyoperations",
    discord: "https://discord.gg/2YH2e2Y",
    facebook: "https://www.facebook.com/Rusty-Operations",
  },
  openGraph: {
    title: "Rusty Operations | News", // OG title
    description: "Stay up to date with our latest news and alerts!!", // OG Description
    siteName: "Rusty Operations", // OG Site name
    url: "https://www.rustyoperations.net", // OG URL
    images: [
      {
        url: "https://www.rustyoperations.net/img/rust-banner.jpg", // Image for sites to use
        width: 1440,
        height: 720,
      },
    ],
    locale: "en-GB", // Location data
    type: "website", // Type of service
    icons: {
      // Icon data
      rel: "icon",
      type: "image/ico",
      icon: "https://www.rustyoperations.net/favicon.ico",
    },
  },
  viewport: "width=device-width, height=device-height, initial-scale=1.0", // Viewport data
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
