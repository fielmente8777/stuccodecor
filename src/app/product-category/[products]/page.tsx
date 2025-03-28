import { Banner2 } from "@/components";
import { categoryData } from "@/data/categoryData";
import ProductsList from "./components/ProductsList";


export default async function Page({ params }: { params: { products: string } }) {
  const  products  = (await params).products;
  const data = categoryData.find((item) => item.slug === products);

  if (!data) {
    return <p>Category not found</p>;
  }

  const links = [
    { label: "home", href: "/" },
    { label: data.slug || "unknown", href: `/${data.slug}` },
  ];

  return (
    <main>
      <Banner2 title={data.title.toUpperCase()} links={links} />
      <ProductsList data={data} />
    </main>
  );
}
