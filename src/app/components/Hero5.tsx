import Image from "next/image";

interface Product {
  id: number;
  name: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="w-[287px] bg-[#FAFAFA] p-2 flex flex-col items-center rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out">
      {/* Product Image */}
      <div className="relative w-full h-64">
        <Image
          src={product.image}  // Ensure the image path is correct
          alt={product.name}
          width={287}
          height={287}
          className="object-cover w-full h-full rounded-t-lg"
        />
      </div>

      {/* Product Name */}
      <div className="mt-2 w-full text-left">
        <p className="font-poppins text-[16px] font-[400] leading-[24px] truncate">
          {product.name}
        </p>
      </div>

      {/* Read More Button */}
      <div className="mt-4 w-full text-center">
        <button className="text-[18px] text-black font-medium">Read More</button>
      </div>

      {/* Clock and Calendar Icons */}
      <div className="flex justify-center items-center mt-4 space-x-2">
        {/* Clock Icon */}
        <div className="w-[18px] h-[17.83px]">
          <Image src="/clock.png" alt="Clock" width={18} height={17.83} />
        </div>
        {/* Time Text */}
        <div className="text-sm text-gray-500">5 min</div>

        {/* Calendar Icon */}
        <div className="w-[18px] h-[18px] ml-4">
          <Image src="/calender.png" alt="Calendar" width={18} height={18} />
        </div>
        {/* Date Text */}
        <div className="text-sm text-gray-500">12th Oct 2022</div>
      </div>
    </div>
  );
};

export default function Hero5() {
  const products: Product[] = [
    {
      id: 1,
      name: "Going all-in with millennial design",
      image: "/blog-01.png",  // Ensure this is the correct path inside the public folder
    },
    {
      id: 2,
      name: "Going all-in with millennial design",
      image: "/blog-02.png",
    },
    {
      id: 3,
      name: "Going all-in with millennial design",
      image: "/blog-03.png",
    },
  ];

  return (
    <div className="w-[1440px] h-[944px] bg-white py-16">
      {/* Parent wrapper div to center everything */}
      <div className="flex justify-center items-center px-4">
        <div className="w-full max-w-[1200px]">
          {/* Heading for Blog Section */}
          <div className="w-[174px] h-[54px] mx-auto flex justify-center items-center text-[36px] font-[500] leading-[54px] font-poppins">
            Our Blogs
          </div>

          {/* Description Text */}
          <div className="w-[479px] h-[24px] mx-auto text-center text-[16px] font-[500] leading-[24px] text-[#9F9F9F] font-poppins mt-4">
            Find a bright idea to suit your taste with our great selection
          </div>

          {/* Product Section (Flex Container for Cards) */}
          <div className="mt-12 flex justify-center gap-6">
            <div className="flex flex-wrap justify-center gap-6 w-full">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* View More Button */}
          <div className="mt-8 flex justify-center w-full">
            <div className="text-[20px] font-[500] leading-[30px] font-poppins cursor-pointer text-center text-black">
              View All Posts
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
