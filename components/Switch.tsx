"use client";

import { useState, useEffect } from "react";

export default function Switch() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checked) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [checked]);

  return (
    <label
      className="flex items-center cursor-pointer gap-2"
      onDoubleClick={(e) => e.preventDefault()}
      style={{ userSelect: "none" }}
    >
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={() => setChecked((prev) => !prev)}
        />
        <div className="w-12 h-6 bg-gray-200 rounded-full shadow-inner relative grid place-content-center">
          <div
            className={`${
              checked ? "bg-primary left-[26px]" : "bg-white left-[2px]"
            } absolute top-[2px] w-5 h-5 rounded-full shadow transition-all ease-linear flex justify-center items-center`}
          >
            <span
              className={`${
                checked ? "text-white " : "text-secondary"
              } font-semibold`}
            ></span>
          </div>
        </div>
      </div>
    </label>
  );
}
