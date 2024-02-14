import Logo from "../../public/assets/logo.svg";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className=" max-w-[1180px] w-full py-4 px-8 flex items-center justify-between self-center text-[#00153399]">
      <div className="w-[134px] h-[80px]">
        <Image src={Logo} alt="logo" className="w-full h-full object-cover" />
      </div>

      <div className="flex items-center gap-[50px]">
        <p className="hover:text-[#193766] hover:font-semibold cursor-pointer">Top</p>
        <p className="hover:text-[#193766] hover:font-semibold cursor-pointer">For Everyone</p>
        <p className="hover:text-[#193766] hover:font-semibold cursor-pointer">Features</p>
        <p className="hover:text-[#193766] hover:font-semibold cursor-pointer">Preview</p>
        <p className="hover:text-[#193766] hover:font-semibold cursor-pointer">License</p>
      </div>

      <button className="bg-white font-semibold px-6 py-2.5 rounded text-[#3B82F6]">
        Download
      </button>
    </nav>
  );
}
