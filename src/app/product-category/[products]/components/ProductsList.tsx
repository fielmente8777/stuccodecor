"use client";
import { ProductCard } from "@/components";
import { useState } from "react";
const ITEMS_PER_PAGE = 9;

interface ProductCardProps {
  slug: string;
  title: string;
  images: {
    src: string;
    alt: string;
  }[];
}

const ProductsList: React.FC<{ data: ProductCardProps }> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = data.images.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  // Calculate items to show on the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedItems = data.images.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div>
      <div className="w-full px-4">
        <p>
          Showing {startIndex + 1}-{startIndex + paginatedItems.length} of{" "}
          {totalItems} results
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 px-4 mt-4">
        {paginatedItems.map((image, index) => (
          <ProductCard
            key={index}
            src={image.src}
            alt={image.alt}
            title={data.title}
            desc={image.alt}
            href={image.alt}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 border rounded ${
                currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-white"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsList;
