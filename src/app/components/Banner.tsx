import Image from "next/image";

const Banner = () => (
  <div
    className="w-[1440px] h-[316px] absolute top-[100px] bg-cover bg-center"
    style={{ backgroundImage: "url('/Banner.png')" }}
  >
    <div className="flex flex-col items-center justify-center h-full">
      {/* Logo */}
      <div className="mb-[2px]"> {/* Slight margin between logo and title */}
        <Image
          src="/Mlogo.png"
          alt="Logo"
          width={77} // Set the desired width
          height={77} // Set the desired height
        />
      </div>
      {/* Title */}
      <h1 className="text-[36px] font-bold text-center text-black leading-none">Shop</h1>
      {/* Breadcrumb */}
      <p className="text-sm text-black mt-1">
        <span className="font-bold">Home</span> &gt; <span>Shop</span>
      </p>
    </div>
  </div>
);

export default Banner;
