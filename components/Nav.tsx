"use client";
import React, { useState } from "react";
import Link from "next/link";
import { navItems } from "@/constant";
import Switch from "./Switch";
import styles from "@/public/style";

export default function Nav() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full font-poppins ">
      <div className="w-[80%] md:w-[60%] m-auto flex justify-between items-center py-5 ">
        <Link
          href={"/"}
          className="text-primary dark:text-white font-semibold text-[24px]"
        >
          hamdan.u
        </Link>
        {/* desktop nav */}
        <div className="hidden sm:flex gap-8 md:gap-10 ">
          {navItems.map((item) => (
            <React.Fragment key={item.id}>
              <Link
                className="text-primary dark:text-white font-semibold text-[18px] hover:underline"
                href={item.link}
              >
                {item.name}
              </Link>
            </React.Fragment>
          ))}
          <Switch />
        </div>
        <div className="flex gap-5 sm:hidden">
          <Switch />
          <span
            onClick={() => setOpenNav((prev) => !prev)}
            className="rotate-90  text-2xl font-reguler cursor-pointer dark:text-white"
          >
            |||
          </span>
        </div>
      </div>

      {/* mobile nav */}
      <div>
        <div
          className={` ${
            styles.flexCenter
          } flex-col sm:hidden gap-4 bg-slate-200 dark:bg-primary w-[150px] rounded-[10px] py-4 absolute right-5 
        ${openNav ? `opacity-[1]` : `opacity-[0]`} transition-[.2s]`}
        >
          {navItems.map((item) => (
            <React.Fragment key={item.id}>
              <Link
                className="text-primary dark:text-white font-semibold text-[18px] hover:underline"
                href={item.link}
              >
                {item.name}
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>
    </nav>
  );
}
