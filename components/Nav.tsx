"use client";
import React, { useState } from "react";
import Link from "next/link";
import { navItems } from "@/constant";
import Switch from "./Switch";

export default function Nav() {
  const [openNav, setOpenNav] = useState(false);

  function handleOpenNav(e: React.MouseEvent) {
    setOpenNav((prev) => !prev);
  }

  return (
    <nav className="fixed top-0 left-0 w-full font-poppins bg-white dark:bg-dark z-10 ">
      <div className="w-[70%] md:w-[60%] max-sm:w-[80%] m-auto flex justify-between items-center py-5 ">
        <Link
          href={"/"}
          className="text-primary dark:text-white font-semibold text-[28px]"
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
            onClick={handleOpenNav}
            className="rotate-90  text-2xl font-reguler cursor-pointer dark:text-white"
          >
            |||
          </span>
        </div>
      </div>

      {/* mobile nav */}
      <div>
        {openNav && (
          <div className="flex-center flex-col sm:hidden gap-4 bg-slate-200 dark:bg-primary w-[150px] rounded-[10px] py-4  right-5 absolute transition-[.2s]">
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
        )}
      </div>
    </nav>
  );
}
