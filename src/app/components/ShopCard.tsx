"use client";
import Image from "next/image";
import { useState } from "react";

// Define the Product type for type safety
interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
}

// ProductCard Component
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="w-[287px] bg-[#FAFAFA] p-4 flex flex-col items-center rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out">
      {/* Product Image */}
      <div className="relative w-full h-64">
        <Image
          src={product.image} // Ensure the image path is correct
          alt={product.name}
          width={287}
          height={287}
          className="object-cover w-full h-full rounded-t-lg"
        />
      </div>

      {/* Product Name */}
      <div className="mt-4 w-full text-left">
        <p className="font-poppins text-[16px] font-[400] leading-[24px] truncate">{product.name}</p>
      </div>

      {/* Product Price */}
      <div className="mt-2 w-full text-left text-xl font-semibold text-black">{product.price}</div>
    </div>
  );
};

// ShopCard Component (Where All 16 Cards are Displayed)
const ShopCard: React.FC = () => {
  // Define the array of products
  const products: Product[] = [
    { id: 1, name: "Trenton modular sofa_3", image: "/P1.png", price: "Rs.25,000.00" },
    { id: 2, name: "Granite dining table with dining chair", image: "/P2.png", price: "Rs.25,000.00" },
    { id: 3, name: "Outdoor bar table and stool", image: "/P3.png", price: "Rs.25,000.00" },
    { id: 4, name: "Plain console with teak mirror", image: "/P4.png", price: "Rs.25,000.00" },
    { id: 5, name: "Grain coffee table", image: "/P5.png", price: "Rs.15,000.00" },
    { id: 6, name: "Kent coffee table", image: "/P6.png", price: "Rs.225,000.00" },
    { id: 7, name: "Round coffee table_color 2", image: "/P7.png", price: "Rs.251,000.00" },
    { id: 8, name: "Reclaimed teak coffee table", image: "/P8.png", price: "Rs.25,200.00" },
    { id: 9, name: "Plain console", image: "/P9.png", price: "Rs.258,200.00" },
    { id: 10, name: "Reclaimed teak Sideboard", image: "/P10.png", price: "Rs.20,000.00" },
    { id: 11, name: "SJP_0825", image: "/P11.png", price: "Rs.200,000.00" },
    { id: 12, name: "Bella chair and table", image: "/P12.png", price: "100,000.00" },
    { id: 13, name: "Granite square side table", image: "/P13.png", price: "Rs.258,800.00" },
    { id: 14, name: "Asgaard sofa", image: "/P14.png", price: "Rs.250,000.00" },
    { id: 15, name: "Maya sofa three seater", image: "/P15.png", price: "Rs.115,000.00" },
    { id: 16, name: "Outdoor sofa set", image: "/P16.png", price: "Rs.244,000.00" },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // Logic to get the current products based on the page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page handler
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="w-full bg-white py-16">
      {/* Title */}
      <div className="text-center text-4xl font-medium mb-8">Our Products</div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={() => handlePageChange(1)}
          className={`px-4 py-2 rounded-md ${currentPage === 1 ? 'bg-gray-400 text-Black' : 'bg-white text-gray-600'}`}
        >
          1
        </button>
        <button
          onClick={() => handlePageChange(2)}
          className={`px-4 py-2 rounded-md ${currentPage === 2 ? 'bg-gray-400 text-white' : 'bg-white text-gray-600'}`}
        >
          2
        </button>
        <button
          onClick={() => handlePageChange(3)}
          className={`px-4 py-2 rounded-md ${currentPage === 3 ? 'bg-gray-400 text-white' : 'bg-white text-gray-600'}`}
        >
          3
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-4 py-2 rounded-md bg-white text-black"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ShopCard;
