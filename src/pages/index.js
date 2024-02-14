import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";


export default function Home() {
  return (
    <main className="flex flex-col gap-[64px] align-center justify-center container">
     <Navbar/>
     <Hero/>
     <Section/>
    </main>
  );
}
