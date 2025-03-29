import { Container, MainHeading, Section } from "@/components";
import Image from "next/image";
import Link from "next/link";

interface productsCategoryProps {
  title: string;
  products: string[];
}

const ProductsCategory: React.FC<productsCategoryProps> = ({
  title,
  products,
}) => {
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-4 w-full">
          <MainHeading
            h2
            title={title}
            className="font-bold manrope largeHeading text-secondary text-center uppercase"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-x-8 lg:gap-y-8 gap-y-6 mt-4 max-w-6xl mx-auto w-full">
            {products.slice(0, 4).map((product, index) => (
              <div key={index} className="flex flex-col gap-4 w-full">
                <Link
                  href={`/${product.toLowerCase()}`}
                  className="box_shadow rounded-2xl p-16 flex items-center justify-center heading2"
                >
                  {index === 5 ? products[3] : product}
                </Link>
              </div>
            ))}
            <div className="w-full relative aspect-[4/1.9] box_shadow rounded-2xl">
              <Image
                src="/logo2.png"
                alt="products"
                fill
                className="rounded-2xl"
              />
            </div>
            <div className="flex flex-col gap-4 w-full">
              <Link
                href={`/${products[4].toLowerCase()}`}
                className="box_shadow rounded-2xl p-16 flex items-center justify-center heading2"
              >
                {products[4]}
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-6 mt-4">
            {products.slice(5).map((product, index) => (
              <div key={index} className="flex flex-col gap-4 w-full">
                <Link
                  href={`/${product.toLowerCase()}`}
                  className="box_shadow rounded-2xl p-16 flex items-center justify-center"
                >
                  {product}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ProductsCategory;
