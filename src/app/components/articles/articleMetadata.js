import Images from "@/app/images.js";

export async function ArticleMetadata(params, type) {
  const id = params.id;

  let title = "This article does not exist.";
  let description = "Please check the URL and try again.";
  let imageUrl = `https://rusty-operations.vercel.app/${Images.banner}`;
  let imageW = 1440;
  let imageH = 720;

  let override = type;
  for (let i = 0; i < id.length; i++) {
    override += "/" + id[i];
  }
  let url = "https://operationscentre.github.io/articles/" + override + ".json";

  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      title = data.title;
      description = data.description;
      imageUrl = data.image;
      imageW = data.imageW;
      imageH = data.imageH;
    })
    .catch((error) => {
      console.error(error);
    });

  return {
    title, // Text shown in the tab
    description, // Meta description for SEO
    siteName: "Rusty Operations", // Site name for SEO
    url: "https://rusty-operations.vercel.app/", // Site URL
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
        width: imageW,
        height: imageH,
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
      url: "https://rusty-operations.vercel.app/", // OG URL
      images: [
        {
          url: imageUrl, // Image for sites to use
          width: imageW,
          height: imageH,
        },
      ],
      locale: "en-GB", // Location data
      type: "website", // Type of service
      icons: {
        // Icon data
        rel: "icon",
        type: "image/ico",
        icon: `https://rusty-operations.vercel.app/${Images.icon}`,
      },
    },
    viewport: "width=device-width, height=device-height, initial-scale=1.0", // Viewport data
  };
}
