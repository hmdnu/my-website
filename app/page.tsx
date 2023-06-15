import Image from "next/image";
import pfp from "@/public/assets/pfp.png";
import styles from "@/public/style";
import { layout } from "@/public/style";
import Link from "next/link";

export default function Home() {
  return (
    <main className={`${layout.main} ${styles.flexCenter} h-[100vh]`}>
      <div className="w-full flex justify-between items-center">
        <Image
          src={pfp}
          loading="lazy"
          width={300}
          alt="profile"
          className="mt-[-65px]"
        />

        <div className="font-poppins leading-normal">
          <h2 className="text-primary dark:text-white font-semibold text-[36px]">
            Hello! 👋
          </h2>
          <h1 className="text-primary dark:text-white font-bold text-[40px]">
            I{"'"}m Hamdan Ubaidillah
          </h1>
          <h2 className="text-primary dark:text-white font-normal text-[30px]">
            Web developer based in Indonesia
          </h2>
          <div className="flex gap-4 mt-10">
            <Link
              className="w-[165px] h-[50px] text-[20px] bg-blue text-white rounded-[10px] font-semibold grid place-content-center cursor-pointer hover:translate-y-[-5px] transition"
              href={"/about"}
            >
              Get to know
            </Link>
            <Link
              className="w-[165px] h-[50px] text-[20px] bg-darkBlue dark:bg-secondary text-white rounded-[10px] font-semibold grid place-content-center hover:translate-y-[-5px] transition"
              href={"/"}
            >
              Lets talk!
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
