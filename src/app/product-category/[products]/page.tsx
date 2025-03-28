import { Banner2 } from "@/components";
import { categoryData } from "@/data/categoryData";
import ProductsList from "./components/ProductsList";

interface Params {
  params: Promise<{ products: string }>;
}

export async function generateStaticParams() {
  const data = categoryData;

  return data.map((data) => ({
    products: data.slug,
    fallback: false,
  }));
}

export async function generateMetadata(props: Params) {
  const params = await props.params;
  const paramsData = await params.products;
  const data = categoryData.find((item) => item.slug === paramsData);

  if (!data) {
    return { title: "Page not found" };
  }

  return {
    title: data.title,
  };
}




const page = async (prop: Params) => {
  const params = await prop.params;
  const paramsData = await params.products;
  const data = categoryData.find((item) => item.slug === paramsData);

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

export default page