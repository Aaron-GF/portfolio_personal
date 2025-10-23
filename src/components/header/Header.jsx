import { useEffect, useState } from "react";
import { ModeToggle } from "@/components/ui/ModeToggle";
import Navbar from "@/components/header/Navbar";
import ScrollProgressBar from "@/components/header/ScrollProgressBar";

export default function Header() {
  return (
    <header className="fixed top-0 z-20 w-full bg-background">
      <div className="flex items-center justify-around gap-4 h-18 relative w-full md:px-8">
        <div className="order-1 md:order-2 h-full">
          <Navbar />
        </div>
        <h1 className="order-2 md:order-1 text-3xl font-bold flex-1 text-center md:text-left md:flex-none">
          <span className="text-secondary">A</span>arón
        </h1>
        <div className="order-3">
          <ModeToggle />
        </div>
        <div className="absolute z-30 bottom-0 left-0 h-[2.5px] w-full bg-primary/20">
          <ScrollProgressBar />
        </div>
      </div>
    </header>
  );
}
