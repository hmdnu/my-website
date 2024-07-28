import Image from "next/image";
import pfp from "@/public/assets/pfp.png";

import Link from "next/link";

export const metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <section className="w-[70%] md:w-[60%] m-auto h-screen flex-center ">
      <div className="w-full flex max-sm:flex-col gap-10 md:gap-28 lg:gap-30 justify-evenly xs:items-center items-start mt-14">
        <div className="font-poppins md:text-left">
          <h2 className="text-primary dark:text-white font-semibold text-[24px] sm:text-[28px] lg:text-[30px]">
            Hello! 👋
          </h2>
          <h1 className="text-primary dark:text-white font-bold text-[32px] sm:text-[36px] lg:text-[36px] ">
            I{"'"}m Hamdan Ubaidillah
          </h1>
          <h2 className="text-primary dark:text-white font-normal sm:text-[24px] text-[20px] ">
            Web developer based in Indonesia
          </h2>
          <div className="flex gap-4 mt-5">
            <Link className="button bg-blue hover:bg-[#2ea0ec]" href={"/about"}>
              Get to know
            </Link>
            <Link
              className="button bg-darkBlue hover:bg-[#496777] dark:bg-secondary hover:dark:bg-[#777777]"
              href="mailto:hamdanubaidillah0306@gmail.com"
            >
              Lets talk!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
