import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="w-[287px] bg-[#FAFAFA] p-4 flex flex-col items-center rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out">
      {/* Product Image */}
      <div className="relative w-full h-64">
        <Image
          src={product.image}
          alt={product.name}
          width={287}
          height={287}
          className="object-cover w-full h-full rounded-t-lg"
        />
      </div>

      {/* Product Name and Price */}
      <div className="mt-2 w-full text-left">
        {/* Product Name */}
        <p className="font-poppins text-[16px] font-[400] leading-[24px] truncate">
          {product.name}
        </p>

        {/* Product Price */}
        <p className="mt-2 text-[24px] font-[500] leading-[36px] text-gray-900">
          {`Rs. ${product.price.toLocaleString()}`}
        </p>
      </div>
    </div>
  );
};

export default function Hero3() {
  const products: Product[] = [
    {
      id: 1,
      name: "Trenton Modular Sofa_3",
      price: 25000,
      image: "/Tren.png",
    },
    {
      id: 2,
      name: "Granite Dining Table with Dining Chair",
      price: 25000,
      image: "/Gding.png",
    },
    {
      id: 3,
      name: "Outdoor Bar Table and Stool",
      price: 25000,
      image: "/Outdoor.png",
    },
    {
      id: 4,
      name: "Plain Console with Teak Mirror",
      price: 25000,
      image: "/Plain.png",
    },
  ];

  return (
    <div className="w-[1440px] bg-white py-16">
      {/* Heading for Top Picks */}
      <div className="w-[311px] h-[54px] mx-auto flex justify-center items-center text-[36px] font-[500] leading-[54px] font-poppins">
        Top Picks For You
      </div>

      {/* Description Text */}
      <div className="w-[773px] h-[24px] mx-auto text-center text-[16px] font-[500] leading-[24px] text-[#9F9F9F] font-poppins mt-4">
        Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
      </div>

      {/* Product Section (Flex Container for Cards) */}
      <div className="mt-12 flex justify-center gap-6 px-6">
        <div className="flex flex-wrap justify-center gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* View More Button */}
      <div className="relative w-[115px] h-[49px] mx-auto mt-8 text-center">
        <div className="absolute top-[0] left-[0] w-[104px] h-[30px] text-left text-[20px] font-[500] leading-[30px] font-poppins cursor-pointer">
          View More
        </div>
      </div>
    </div>
  );
}
