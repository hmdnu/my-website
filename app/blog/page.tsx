import React from "react";

export const metadata = {
  title: "Blog",
};

export default function Blog() {
  return (
    <div className="main-layout h-[80vh] flex-center">
      <div className="bg-slate-200 dark:bg-secondary rounded-[10px] sm:p-20 p-10">
        <h1 className="text-2xl font-semibold text-primary dark:text-white">
          🔨 Still on project! 🔧
        </h1>
      </div>
    </div>
  );
}
