import Image from "next/image";

export default function Insta() {
  return (
    <div className="relative w-[1440px] h-[450px] top-[-252px] bg-[#FAF4F480]">
      {/* Background Image */}
      <Image
        src="/Insta.png"
        alt="Instagram Background"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 w-full h-full"
      />

      {/* Content Section */}
      <div className="absolute top-[150px] left-1/2 transform -translate-x-1/2 text-center">
        {/* Title */}
        <h1 className="font-poppins text-[48px] font-bold text-black leading-[90px]">
          Our Instagram
        </h1>

        {/* Description */}
        <p className="font-poppins text-[20px] font-normal text-black mt-[10px]">
          Follow our store on Instagram
        </p>

        {/* Follow Us Button */}
        <div className="mt-[20px]">
          <button className="w-[150px] h-[50px] bg-white text-black font-poppins text-[20px] font-medium rounded-[30px] shadow-md hover:shadow-lg transition-shadow">
            Follow Us
          </button>
        </div>
      </div>
    </div>
  );
}
