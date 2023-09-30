import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import { ArticleMetadata } from "@/app/components/articles/articleMetadata";

export async function generateMetadata({ params }) {
  return await ArticleMetadata(params, "/forums");
}

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
