import Image from "next/image";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import Section from "@/Components/Section";


export default function Home() {
  return (
    <main className="flex flex-col gap-[64px] align-center justify-center container">
     <Navbar/>
     <Hero/>
     <Section/>
    </main>
  );
}
