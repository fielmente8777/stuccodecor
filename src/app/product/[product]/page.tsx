import { categoryData } from "@/data/categoryData";
import Image from "next/image";
import Link from "next/link";

interface Params {
  params: Promise<{ product: string }>;
}

export async function generateStaticParams() {
  const data = categoryData;

  // This generates static params for each product, assuming `slug` is unique
  return data.flatMap((item) => 
    item.images.map((image) => ({
      product: image.alt.replace(/\s/g, '-').replace(/\./g, '-').replace(/,/g, '-'),
      fallback: false,
    }))
  );
}

export async function generateMetadata(props: Params) {
  const params = await props.params;
  const productSlug = await params.product;
  const productData = categoryData
    .flatMap((item) => item.images)
    .find((i) => i.alt.replace(/\s/g, '-').replace(/\./g, '-').replace(/,/g, '-') === productSlug);

  if (!productData) {
    return { title: "Product not found" };
  }

  // Find category info based on the product
  const category = categoryData.find((item) =>
    item.images.some((i) => i.alt === productData.alt)
  );

  return {
    title: category ? category.title : "Product not found",
  };
}

const page = async (props: Params) => {
  const params = await props.params;
  const productSlug = await params.product;
  const productData = categoryData
    .flatMap((item) => item.images)
    .find((i) => i.alt.replace(/\s/g, '-').replace(/\./g, '-').replace(/,/g, '-') === productSlug);

  if (!productData) {
    return <p>Product not found</p>;
  }

  // Find the category for the product
  const category = categoryData.find((item) =>
    item.images.some((i) => i.alt === productData.alt)
  );

  if (!category) {
    return <p>Category not found</p>;
  }



  return (
    <main className="max-screen py-16">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 w-full">
        <div className="relative w-full aspect-[4/3]">
          <Image
            src={productData.src}
            alt={productData.alt}
            fill
            className="rounded-md"
          />
        </div>
        <div>
          <p className="uppercase text-tertiary">
            <Link href={`/`} className="capitalize">Home</Link>/
            <Link href={`/product-category/${category.slug}`} className="">{category.title}</Link>/
            {productData.alt}
          </p>
          <Link href={`/product-category/${category.slug}`} className="text-quaternary uppercase">{category.title}</Link>
          <div className="mt-4 w-full h-px bg-gray-300"></div>
          <p className=" text-tertiary">
            Category :{" "}
            <Link href={`/product-category/${category.slug}`} className="text-quaternary uppercase">{category.title}</Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default page;
