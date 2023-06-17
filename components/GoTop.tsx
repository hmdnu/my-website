"use client";
import React, { useEffect } from "react";
import arrow from "@/public/assets/right-arrow.png";
import Image from "next/image";
import { useState } from "react";

export default function GoTop() {
  const [arrowHidden, setArrowHidden] = useState(false);

  function handleGoTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;

    if (scrollTop >= 200) {
      setArrowHidden(true);
    } else {
      setArrowHidden(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      onClick={handleGoTop}
      className={`fixed right-4 w-[40px] h-[40px] bg-slate-300 flex-center rounded-full ${
        arrowHidden ? " bottom-10" : "bottom-[-100px]"
      } transition-all duration-500`}
    >
      <Image src={arrow} alt="arrow" className={`w-5 -rotate-90`} />
    </div>
  );
}
