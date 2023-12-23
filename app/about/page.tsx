import Image from "next/image";
import { skillsets, sosmeds } from "@/constant";
import Link from "next/link";

export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <section className="main-layout">
      {/* about me */}
      <div>
        <h1 className="heading-1">About me</h1>
        {/* paragraph */}
        <div className="mt-4">
          <p className="paragraph">
            Hello 👋, I<span className="font-medium">m Hamdan Ubaidillah</span>{" "}
            but you can call me <span className="font-medium"> Hamdan</span>. Im
            a web developer from Indonesia and Im currently 19 years old. I was
            born and live in Pandaan, East Java. I graduated from{" "}
            <Link
              href={"https://www.smarifda.sch.id"}
              target="_blank"
              className="font-medium cursor-pointer hover:underline"
            >
              SMA Maarif NU Pandaan
            </Link>{" "}
            highschool. Im currently studying at{" "}
            <Link
              href={"https://www.polinema.ac.id/"}
              target="_blank"
              className="font-medium hover:underline"
            >
              State Polytechnic of Malang
            </Link>{" "}
            as a computer science student.
          </p>
          <p className="paragraph mt-4">
            I started web development in 2022 as a web developer I mainly use
            Javascript ecosystem to build web app.
          </p>
        </div>
      </div>

      {/* skills */}
      <div className="mt-10">
        <h1 className="heading-1">Skills</h1>
        <div className="mt-4 flex max-sm:flex-col gap-5">
          {/* skill box */}
          {skillsets.map((skill) => (
            <div
              key={skill.id}
              className="mt-4 border-[1px] border-stroke dark:hover:border-secondary hover:bg-stroke dark:hover:bg-secondary w-full rounded-[10px] p-5 cursor-default hover:translate-y-[-5px] transition duration-[.4s]"
            >
              <h2 className="heading-2 mb-1">{skill.name}</h2>
              <ul className="text-primary dark:text-white flex flex-col">
                {skill.skills.map((skill, i) => (
                  <li
                    className="md:text-[18px] sm:text-[16px] text-[16px] text-secondary dark:text-[#dddddd]"
                    key={i}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* sosmed */}
      <div className="mt-10">
        <h1 className="heading-1">Find me on </h1>
        {/* sosmed box */}
        <div className="mt-4 gap-5 flex max-sm:flex-col">
          {sosmeds.map((sosmed) => (
            <Link
              href={sosmed.link}
              target="_blank"
              key={sosmed.id}
              className="mt-3 border border-stroke dark:hover:border-secondary hover:bg-stroke dark:hover:bg-secondary rounded-[10px] px-5 py-3 w-full flex items-center md:gap-4 max-sm:gap-4 hover:translate-y-[-5px] gap-2 transition duration-[.4s]"
            >
              <Image
                src={sosmed.img}
                alt={sosmed.name}
                className="lg:w-[48px] w-[44px]"
              ></Image>
              <h1
                className={`text-primary dark:text-white font-semibold lg:text-[22px] text-[16px]`}
              >
                {sosmed.name}
              </h1>
            </Link>
          ))}
        </div>
        <div className="paragraph mt-5">
          You can also reach me via email at:{" "}
          <Link
            href="mailto:hamdanubaidillah0306@gmail.com"
            className="font-semibold hover:underline"
            target="_blank"
          >
            hamdanubaidillah0306@gmail.com
          </Link>
        </div>
      </div>
    </section>
  );
}
