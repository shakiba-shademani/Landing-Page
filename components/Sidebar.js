import React, { useState } from "react";
import lArrow from "../public/img/left-arrow.svg";
import BArrow from "../public/img/buttom-arrow.svg";
import charge from "../public/img/charge.svg";
import pardakht from "../public/img/pardakht.svg";
import ghabz from "../public/img/ghabz.svg";
import naji from "../public/img/naji.svg";
import bashgah from "../public/img/bashgah.svg";

import Image from "next/image";

const topics = [
  {
    id: 1,
    topic: "کیف پول",
    desc: " راهنمای کیف پول",
    src: charge,
  },
  {
    id: 2,
    topic: "قبض",
    desc: " راهنمای قبض",
    src: ghabz,
  },
  {
    id: 3,
    topic: "شارژ",
    desc: "راهنمای شارژ",
    src: charge,
  },
  {
    id: 4,
    topic: "ناجی",
    desc: "راهنمای ناجی",
    src: naji,
  },
  {
    id: 5,
    topic: "باشگاه مشتریان",
    desc: "راهنمای باشگاه مشتریان",
    src: bashgah,
  },
  {
    id: 6,
    topic: "پرداخت",
    desc: "راهنمای پرداخت",
    src: pardakht,
  },
];

export default function Sidebar() {
  const [showBar, setShowBar] = useState(null);

  return (
    <div className="lg:w-1/6 mt-20 overflow-x-hidden overflow-y-auto block font-semibold">
      {topics.map((i) => (
        <nav key={i.id} className=" bg-yellow-100">
          <div className="flex justify-between items-center border-b border-gray-300 py-4 px-2">
            <div className="w-6 h-10">
              <Image src={i.src} />
            </div>
            {i.topic}
            <div
              className="cursor-pointer"
              onClick={() =>
                showBar === i.id ? setShowBar(null) : setShowBar(i.id)
              }
            >
              {showBar === i.id ? (
                <Image src={BArrow} />
              ) : (
                <Image src={lArrow} />
              )}
            </div>
          </div>
          <div>
            {showBar === i.id && (
              <p className="bg-white border-b border-gray-300 font-normal py-4 px-2 ">
                {i.desc}
              </p>
            )}
          </div>
        </nav>
      ))}
    </div>
  );
}
