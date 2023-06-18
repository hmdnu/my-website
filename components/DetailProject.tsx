"use client";
import { projects } from "@/constant";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Detail() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  const [detail, setDetail] = useState<any>({});

  useEffect(() => {
    function getDetail() {
      projects.map((project) => {
        if (project.name === name) setDetail(project.detail);
      });
    }
    getDetail();
  }, [name]);

  return (
    <section className="main-layout">
      <h1 className="heading-1">{name}</h1>
      <div className="mt-5">
        <Link
          href={`${detail.demo}`}
          target="_blank"
          className="drop-shadow-md cursor-pointer"
        >
          <Image
            src={detail.img}
            loading="lazy"
            alt="img"
            className="w-full rounded-[15px] hover:contrast-[0.8] transition duration-300"
          />
        </Link>
        {/* desc */}
        <div className="mt-10">
          <h1 className="heading-1">Description</h1>
          <p className="paragraph mt-5">{detail.desc}</p>
          <div className="flex gap-3 sm:text-[18px] text-[16px] mt-3 font-semibold text-white ">
            <Link
              className="flex-center hover:translate-y-[-3px] transition duration-300 sm:w-[100px] w-[90px] sm:h-[40px] h-[34px] bg-darkBlue rounded-md"
              href={`${detail.repo}`}
              target="_blank"
            >
              Repo
            </Link>
            <Link
              className="flex-center hover:translate-y-[-3px] transition duration-300 sm:w-[100px] w-[90px] sm:h-[40px] h-[34px] bg-blue rounded-md"
              href={`${detail.demo} `}
              target="_blank"
            >
              Visit
            </Link>
          </div>
        </div>
        {/* tech box */}
        <div>
          <h1 className="heading-1 mt-10">Tech Stack</h1>
          <div className="flex justify-start flex-wrap items-start sm:gap-5 gap-3 mt-5">
            {detail.techStack?.map((stack: string, i: number) => (
              <div
                className="border border-stroke dark:hover:border-secondary rounded-[5px] sm:w-[150px] w-[140px] max-xs:w-full h-[50] p-2 text-center hover:bg-stroke dark:hover:bg-secondary hover:translate-y-[-4px] transition duration-200"
                key={i}
              >
                <h1 className="sm:text-[20px] text-[16px] font-medium text-primary dark:text-white">
                  {stack}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
