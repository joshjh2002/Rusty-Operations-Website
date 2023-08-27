import ClientComponents from "./client-component.js";

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = params.id;
  return {
    title: `Metadata ${id}`, // Text shown in the tab
    description: "This is a new article", // Meta description for SEO
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
        url: "https://rusty-operations-admin-panel.web.app/img/rust-banner.jpg",
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
      title: `Metadata ${id}`, // OG title
      description: "This is a new article", // OG Description
      siteName: `Metadata ${id}`, // OG Site name
      url: "https://www.rustyoperations.net", // OG URL
      images: [
        {
          url: "https://rusty-operations-admin-panel.web.app/img/rust-banner.jpg", // Image for sites to use
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

export default function Page() {
  return <ClientComponents />;
}
