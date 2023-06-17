"use client";
import Link from "next/link";
import Image from "next/image";
import arrow from "@/public/assets/right-arrow.png";
import { useState } from "react";

export default function Footer() {
  const [openFooter, setOpenFooter] = useState(true);

  return (
    <>
      <footer
        className={`w-fit m-auto fixed bottom-10 flex items-center ${
          openFooter ? "left-[-323px]" : "left-0"
        } transition-all duration-300`}
      >
        <div className="bg-green-500 px-4 py-5 h-8 text-white font-poppins flex-center">
          <h1 className="font-medium text-base">
            Made with 💛 by{" "}
            <Link
              className="font-semibold underline"
              href="https://www.instagram.com/hmdnubaidillah"
              target="_blank"
            >
              hamdanubaidillah
            </Link>
          </h1>
        </div>
        <div
          onClick={() => setOpenFooter((prev) => !prev)}
          className="bg-slate-200 dark:bg-white py-5 px-1 rounded-r-[5px] h-8 flex-center"
        >
          <Image
            loading="lazy"
            src={arrow}
            alt="arrow"
            width={15}
            className={`${openFooter ? "rotate-0" : "rotate-180"}`}
          />
        </div>
      </footer>
    </>
  );
}
