import Image from "next/image";
import Design from "../../public/assets/designer.svg";
import Code from "../../public/assets/coder.svg";
import Mark from "../../public/assets/markerter.svg";

export default function Section() {
  return (
    <main className="flex flex-col items-center gap-[87px] px-[130px] py-[20px] text-center text-[#193766] font-medium text-[32px]">
      <h3 className="max-w-[574px] w-full">
        Figma Social Feeds is designed for everyone. Use for whatever you want,
        it’s completely free!
      </h3>

      <section className="max-w-[1180px] w-full flex items-center justify-between self-center">
        <div className="flex flex-col gap-5 p-[50px] rounded bg-transparent ">
          <div className="p-2.5 rounded flex items-center justify-center bg-[#193766]">
            <Image src={Design} alt="" />
          </div>
        </div>
      </section>
    </main>
  );
}
