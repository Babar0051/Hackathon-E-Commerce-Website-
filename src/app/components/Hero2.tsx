import Image from "next/image";
import Link from "next/link";

export default function Hero2() {
  return (
    <div className="w-[1440px] h-[800px] bg-[#FAF4F4] flex justify-between items-center">
      {/* Left Section */}
      <div className="absolute w-[605px] h-[562px] top-[1047px] left-[100px]">
        <Image 
          src="/Granitesquare.png" 
          alt="Granite Square" 
          width={1902} 
          height={1641} 
          className="w-full h-full object-cover"
        />
        {/* Slightly moved text towards the left */}
        <h1 className="absolute w-full top-[420px] left-[110px] font-poppins text-[36px] font-[500] leading-[54px]">
          Side table
        </h1>
        <Link 
          href="/side-table" 
          className="absolute top-[480px] left-[110px] text-[18px] font-poppins text-black hover:underline"
        >
          View More
        </Link>
      </div>

      {/* Right Section */}
      <div className="absolute w-[605px] h-[562px] top-[1047px] left-[735px]">
        <Image 
          src="/Cloudsofa.png" 
          alt="Cloud Sofa" 
          width={1585} 
          height={1055} 
          className="w-full h-full object-cover"
        />
        {/* Slightly moved text towards the left */}
        <h1 className="absolute w-full top-[420px] left-[120px] font-poppins text-[36px] font-[500] leading-[54px]">
          Side table
        </h1>
        <Link 
          href="/side-table" 
          className="absolute top-[480px] left-[120px] text-[18px] font-poppins text-black hover:underline"
        >
          View More
        </Link>
      </div>
    </div>
  );
}
