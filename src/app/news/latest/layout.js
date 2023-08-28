import { Inter } from "next/font/google";
import { db } from "../../firebaseInit.js";
import { ref, onValue } from "firebase/database";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params, searchParams }, parent) {
  let title = "Latest News";
  let description = "Cannot find a description for this article.";
  let imageUrl =
    "https://rusty-operations-admin-panel.web.app/img/rust-logo.jpg";

  const fileName = await ref(db, `service`);
  await onValue(fileName, (snapshot) => {
    const data = snapshot.val();
    console.log(data);

    if (data != null) {
      title = data.title;
      description = data.description;
    }
  });

  // read route params

  return {
    title, // Text shown in the tab
    description, // Meta description for SEO
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
        url: imageUrl,
        width: 800,
        height: 600,
      },
    ],
    social: {
      twitter: "https://twitter.com/rustyoperations",
      discord: "https://discord.gg/2YH2e2Y",
      facebook: "https://www.facebook.com/Rusty-Operations",
    },
    openGraph: {
      title, // OG title
      description, // OG Description
      siteName: "Rusty Operations", // OG Site name
      url: "https://www.rustyoperations.net", // OG URL
      images: [
        {
          url: imageUrl, // Image for sites to use
          width: 800,
          height: 600,
        },
      ],
      locale: "en-GB", // Location data
      type: "website", // Type of service
      icons: {
        // Icon data
        rel: "icon",
        type: "image/ico",
        icon: "https://rusty-operations-admin-panel.web.app/favicon.ico",
      },
    },
    viewport: "width=device-width, height=device-height, initial-scale=1.0", // Viewport data
  };
}

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
