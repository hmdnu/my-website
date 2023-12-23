import { projects } from "@/constant";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Project",
};

export default function Project() {
  return (
    <section className="main-layout">
      <div>
        <h1 className="heading-1">Projects</h1>
        <div className="mt-10 grid md:grid-cols-2 grid-cols-1 gap-10">
          {projects.reverse().map((project) => (
            <div
              key={project.id}
              className="rounded-[10px] bg-[#eee] dark:bg-secondary hover:bg-[#ddd] hover:dark:bg-[#777] transition-all drop-shadow-xl w-full pb-4"
            >
              <Image loading="lazy" src={project.img} alt={"project"} className="w-full rounded-t-[10px]" />
              <div className="px-8 py-5 rounded-b-[10px]">
                <h1 className="heading-3">{project.name}</h1>
                <p className="text-primary dark:text-white md:text-[18px] sm:text-[16px] text-[16px] font-medium">
                  {project.desc}
                </p>
              </div>
              <div className="flex gap-5 justify-end mx-5 mb-2 text-primary dark:text-white sm:text-[18px] text-[16px]">
                <Link className="hover:underline" href={`${project.demo}`} target="_blank">
                  Visit
                </Link>
                <Link className="hover:underline" href={`/project/${project.name}`}>
                  Detail
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
