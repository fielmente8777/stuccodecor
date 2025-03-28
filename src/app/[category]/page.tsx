import { Banner2 } from "@/components";
import { categoryData } from "@/data/categoryData";
import Products from "./components/Products";

interface Params {
  params: Promise<{ category: string }>;
}
export async function generateStaticParams() {
  const data = categoryData;

  return data.map((data) => ({
    category: data.slug,
    fallback: false,
  }));
}

export async function generateMetadata(props: Params) {
  const params = await props.params;
  const paramsData = await params.category;
  const data = categoryData.find((item) => item.slug === paramsData);

  if (!data) {
    return { title: "Page not found" };
  }

  return {
    title: data.title,
    // openGraph: {
    //   title: data.title,
    //   // url: `https://www.minimalisthotels.com/${data.slug}`,
    //   siteName: "Kamal Farms Karjat",
    //   locale: "en-IN",
    //   type: "website",
    //   images: [
    //     {
    //       url: `https://www.minimalisthotels.com/${data.slug}/og-image.png`,
    //       width: 800,
    //       height: 600,
    //       alt: `www.minimalisthotels.com/${data.slug}`,
    //     },
    //     {
    //       url: `https://www.minimalisthotels.com/${data.slug}/og-image.png`,
    //       width: 900,
    //       height: 800,
    //       alt: `www.minimalisthotels.com/${data.slug}`,
    //     },
    //     {
    //       url: `https://www.minimalisthotels.com/${data.slug}/og-image.png`,
    //       width: 1000,
    //       height: 800,
    //       alt: `www.minimalisthotels.com/${data.slug}`,
    //     },
    //   ],
    // },
    // alternate: {
    //   languages: {
    //     en: "/en/[slug]",
    //   },
    //   canonical: `https://www.minimalisthotels.com/${data.slug}`,
    // },
  };
}

export default async function Page({
  params,
}: {
  params: { category: string };
}) {
  const { category } = await params;
  const data = categoryData.find((item) => item.slug === category);
  const links = [
    {
      label: "home",
      href: "/",
    },
    {
      label: data?.slug || "unknown",
      href: `/${data?.slug}`,
    },
  ];

  if (!data) {
    return <p>Category not found</p>;
  }
  return (
    <main>
      <Banner2 title={data?.title.toUpperCase()} links={links} />
      {data && <Products {...data} />}
    </main>
  );
}
