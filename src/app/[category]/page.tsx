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
  };
}

// export default async function Page({
//   params,
// }: {
//   params: { category: string };
// }) {
//   const { category } = await params;
//   const data = categoryData.find((item) => item.slug === category);
//   const links = [
//     {
//       label: "home",
//       href: "/",
//     },
//     {
//       label: data?.slug || "unknown",
//       href: `/${data?.slug}`,
//     },
//   ];

//   if (!data) {
//     return <p>Category not found</p>;
//   }
//   return (
//     <main>
//       <Banner2 title={data?.title.toUpperCase()} links={links} />
//       {data && <Products {...data} />}
//     </main>
//   );
// }

 const page = async (prop: Params) => {
  const params = await prop.params;
  const paramsData = await params.category;
  const data = categoryData.find((item) => item.slug === paramsData);

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
};

export default page;