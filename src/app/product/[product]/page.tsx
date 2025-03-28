import { categoryData } from "@/data/categoryData";
import Image from "next/image";
import Link from "next/link";

interface Params {
  params: { product: string };
}

export async function generateStaticParams() {
  const data = categoryData.map((item) =>
    item.images.map((i) =>
      i.alt.replace(/\s/g, "-").replace(/\./g, "-").replace(/,/g, "-")
    )
  );

  return data.map((data) => data);
}

export async function generateMetadata(props: Params) {
  const params = await props.params;
  const paramsData = await params.product;
  const data = categoryData
    .map((item) =>
      item.images.find(
        (i) =>
          i.alt.replace(/\s/g, "-").replace(/\./g, "-").replace(/,/g, "-") ===
          paramsData
      )
    )
    .find((item) => item !== undefined);

  if (!data) {
    return { title: "Page not found" };
  }

  return {
    title: data.alt,
  };
}

export default async function Page({
  params,
}: {
  params: { product: string };
}) {
  const { product } = await params;
  const productShow = categoryData.find((item) =>
    item.images
      .map((i) =>
        i.alt.replace(/\s/g, "-").replace(/\./g, "-").replace(/,/g, "-")
      )
      .includes(product)
  );
  const data = categoryData
    .map((item) =>
      item.images.find(
        (i) =>
          i.alt.replace(/\s/g, "-").replace(/\./g, "-").replace(/,/g, "-") ===
          product
      )
    )
    .find((item) => item !== undefined);

  if (!data) {
    return <p>Category not found</p>;
  }

  if (!productShow) {
    return <p>product not found</p>;
  }

  return (
    <main>
      <div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 w-full">
          <div className="relative w-full aspect-[4/3]">
            <Image src={data.src} alt={data.alt} fill className="rounded-md" />
          </div>
          <div className="">
            <p className="uppercase text-tertiary">
              <Link href={`/`} className="capitalize">
                Home
              </Link>
              /
              <Link
                href={`/product-category/${productShow?.title}`}
                className=""
              >
                {productShow?.title}
              </Link>
              /{data.alt}
            </p>
            <Link
              href={`/product-category/${productShow?.title}`}
              className="text-quaternary uppercase"
            >
              {productShow?.title}
            </Link>
            <div className="mt-4 w-full h-px bg-gray-300"></div>
            <p className=" text-tertiary">
              Category :{" "}
              <Link
                href={`/product-category/${productShow?.title}`}
                className="text-quaternary uppercase"
              >
                {productShow?.title}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
