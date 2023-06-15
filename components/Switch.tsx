"use client";

import { useState } from "react";
export default function Switch() {
  const [checked, setChecked] = useState(false);

  if (checked) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <label className="flex items-center cursor-pointer gap-2">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={() => setChecked((prev) => !prev)}
        />
        <div className="w-12 h-4 bg-gray-200  rounded-full shadow-inner"></div>
        <div
          className={`${
            checked ? "bg-primary left-[21px]" : "bg-white left-[-1px]"
          } absolute  top-[-5px] w-7 h-7 rounded-full shadow transition-[1s] flex justify-center items-center`}
        >
          <span
            className={`${
              checked ? "text-white " : "text-primary"
            } font-semibold`}
          >
            {checked ? "D" : "L"}
          </span>
        </div>
      </div>
    </label>
  );
}
