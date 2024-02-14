import Image from "next/image";
import HeroImg from "../../public/assets/hero-img.svg";
import Download from "../../public/assets/download.svg";
import Play from "../../public/assets/play-circle.svg";

export default function Hero() {
  return (
    <main className="flex items-center justify-between px-[140px]">
      <section className="max-w-[537px] w-full flex flex-col gap-10">
        <div className="flex flex-col gap-5 text-[#697B98] text-[22px]">
          <h1 className="text-[#193766] text-[64px] font-normal">
            Beautiful Design For{" "}
            <span className="font-bold underline">Social Media</span> Content
          </h1>
          <p>
            Figma social media content templates for branding, marketing,
            insights, and more. Free for personal and commercial use!
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-4 bg-[#3B82F6] text-white font-bold px-[30px] py-[20px] rounded text-[16px]">
            <Image src={Download} alt="download icon" />
            <p>Download</p>
          </button>
          <button className="flex items-center gap-4 bg-[#C6DBFF] text-[#3B82F6] font-bold px-[30px] py-[20px] rounded text-[16px]">
            <Image src={Play} alt="play icon" />
            <p>See in Action</p>
          </button>
        </div>
      </section>

      <div className="max-w-[583px] w-full h-[582px]">
        <Image src={HeroImg} alt="" className="w-full h-full object-cover" />
      </div>
    </main>
  );
}
