import Link from "next/link";
import { IoPersonOutline, IoSearchOutline, IoHeartOutline, IoCartOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <nav className="w-[1440px] h-[100px] flex justify-between items-center bg-[#FBEBB5] px-6 py-4">
      {/* Links Section */}
      <div className="flex w-[430px] h-[24px] justify-between items-center mx-auto text-black font-medium">
        <Link
          href="/"
          className="w-[48px] h-[24px] font-poppins text-[16px] font-medium leading-[24px] text-left underline-offset-[from-font] decoration-skip-ink-none hover:underline"
        >
          Home
        </Link>
        <Link
          href="./shop" className="w-[42px] h-[24px] font-poppins text-[16px] font-medium leading-[24px] text-left underline-offset-[from-font] decoration-skip-ink-none hover:underline"
        >
          Shop
        </Link>
        <Link
          href="/about"
          className="w-[49px] h-[24px] font-poppins text-[16px] font-medium leading-[24px] text-left underline-offset-[from-font] decoration-skip-ink-none hover:underline"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="w-[66px] h-[24px] font-poppins text-[16px] font-medium leading-[24px] text-left underline-offset-[from-font] decoration-skip-ink-none hover:underline"
        >
          Contact
        </Link>
      </div>

      {/* Icons Section */}
      <div className="flex w-[200px] h-[24px] justify-end space-x-8 pr-[80px] items-center">
        <Link href="/profile">
          <IoPersonOutline className="w-6 h-6" aria-label="Profile" />
        </Link>
        <Link href="/search">
          <IoSearchOutline className="w-6 h-6" aria-label="Search" />
        </Link>
        <Link href="/favorites">
          <IoHeartOutline className="w-6 h-6" aria-label="Favorites" />
        </Link>
        <Link href="/cart">
          <IoCartOutline className="w-6 h-6" aria-label="Cart" />
        </Link>
      </div>
    </nav>
  );
}
