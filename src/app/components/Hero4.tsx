import Image from "next/image";
import Link from "next/link";

export default function Hero4() {
  return (
    <div className="w-[1476px] h-[799px] bg-[#FFF9E5] flex justify-between items-center px-[110px]">
      {/* Sofa Image */}
      <div className="w-[883px] h-[799px] flex-shrink-0">
        <Image
          src="/Asgaard.png"
          alt="Sofa Picture"
          width={983}
          height={799}
          className="object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center">
        {/* New Arrivals Section */}
        <div className="w-[149px] h-[36px] flex items-center justify-center font-poppins text-[24px] font-medium leading-[36px] text-center mb-[16px]">
          New Arrivals
        </div>

        {/* Asgaard Sofa Title */}
        <div className="w-[331px] h-[72px] flex items-center justify-center font-poppins text-[48px] font-bold leading-[72px] text-center mb-[24px]">
          Asgaard sofa
        </div>

        {/* Order Now Button */}
        <div className="w-[255px] h-[64px] border border-black flex items-center justify-center rounded-lg">
          <Link href="/order-now" className="font-poppins text-[20px] font-normal leading-[30px] text-center">
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
}
