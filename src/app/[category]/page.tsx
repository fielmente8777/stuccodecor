import { Banner2 } from "@/components";
import { categoryData } from "@/data/categoryData";
import Products from "./components/Products";

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

  return (
    <main>
      <Banner2 title={data?.title.toUpperCase()} links={links} />
      {data && <Products {...data} />}
    </main>
  );
}
