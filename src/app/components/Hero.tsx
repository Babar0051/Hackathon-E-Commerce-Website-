import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="w-[1440px] h-[900px] top-[100px] bg-[#FBEBB5] flex justify-between">
        <div className="w-[440px] h-[276px] top-[428px] left-[202px] ">
        <div className="absolute w-[440px] h-[192px] top-[428px] left-[202px] font-poppins text-[64px] font-[500] leading-[96px] text-left underline-offset-[from-font] decoration-skip-ink-none">
  Rocket single seater
</div>
<button className="absolute w-[121px] h-[36px] top-[655px] left-[206px] text-black font-poppins text-[24px] font-[500] leading-[36px] text-left underline-offset-[from-font] decoration-skip-ink-none">
  Shop Now
</button>

  </div>
             
      <Image 
        src="/Chairone.png" 
        alt="chair" 
        width={853} 
        height={1000} 
        className="left-[1440px] gap-0" 
      />
  </div>
  );
}
