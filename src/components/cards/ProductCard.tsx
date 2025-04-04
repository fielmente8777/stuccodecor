import Image from "next/image";
import Link from 'next/link';

interface ProductCardProps {
    src: string;
    alt: string;
    title: string;
    desc: string;
    href: string;
}
const ProductCard: React.FC<ProductCardProps> = ({ src, alt, title, desc, href }) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <Link href={`/product/${href.replace(/\s/g, '-').replace(/\./g, '-').replace(/,/g, '-')}`} className="w-full relative aspect-[4/2.5]">
        <Image src={src} alt={alt} fill />
      </Link>
      <div className="flex flex-col gap-2">
        <h3 className="text-tertiary font-bold uppercase">{title}</h3>
        <Link href={`/product/${href.replace(/\s/g, '-').replace(/\./g, '-').replace(/,/g, '-')}`} className="text-primary uppercase">{desc}</Link>
        <Link href={`/product/${href.replace(/\s/g, '-').replace(/\./g, '-').replace(/,/g, '-')}`} className="text-white bg-quaternary rounded-md px-5 py-2 w-fit">Read More</Link>
      </div>
    </div>
  );
};

export default ProductCard;
