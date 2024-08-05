import Image from "next/image";
import TopHeader from "./components/TopHeader";
import BottomHeader from "./components/BottomHeader";
import HomePage from "./components/HomePage";
import SlideOne from "./components/SlideOne";

export default function Home() {
  return (
    <main className="">
     <HomePage />
     <SlideOne />
    </main>
  );
}
