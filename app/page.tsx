import Image from "next/image";
import pfp from "@/public/assets/pfp.png";
import styles from "@/public/style";
import Link from "next/link";

export const metadata = {
  title: "Home | hamdan.u",
};

export default function Home() {
  return (
    <section
      className={`w-[70%] md:w-[60%] m-auto ${styles.flexCenter} h-screen`}
    >
      <div className="w-full flex max-sm:flex-col gap-10 md:gap-28 lg:gap-30 justify-evenly xs:items-center items-start">
        <Image
          src={pfp}
          loading="lazy"
          alt="profile"
          className="mt-[-65px] w-[300px] max-md:w-[220px]"
        />

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
            <Link
              className="w-[165px] h-[50px] max-sm:w-[130px] sm:text-[20px] text-[18px] bg-blue text-white rounded-[10px] font-semibold grid place-content-center cursor-pointer hover:translate-y-[-5px] transition"
              href={"/about"}
            >
              Get to know
            </Link>
            <Link
              className="w-[165px] h-[50px] max-sm:w-[130px] sm:text-[20px] text-[18px] bg-darkBlue dark:bg-secondary text-white rounded-[10px] font-semibold grid place-content-center hover:translate-y-[-5px] transition"
              href={"/"}
            >
              Lets talk!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
