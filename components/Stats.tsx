"use client"; // this is a client component 👈🏽
import React, { useEffect, useState } from "react";
import cx from "classnames";
import { Graffiti } from "@/lib/types";
import CountUp from "react-countup";

type Props = {
  graffitiData: Graffiti[];
  textColor?: string;
};

const Stats = ({ graffitiData, textColor }: Props) => {
  const [uniqueStakers, setUniqueStakers] = useState<string[]>([]);

  useEffect(() => {
    let stakers: string[] = [];
    if (graffitiData) {
      graffitiData.map((graffiti) => {
        if (!stakers.includes(graffiti.proposerId)) {
          stakers.push(graffiti.proposerId);
        }
      });
    }
    setUniqueStakers(stakers);
  }, [graffitiData]);

  const stats = [
    {
      label: "noggle graffiti blocks",
      value: graffitiData.length,
    },
    {
      label: "validator graffiti artists",
      value: uniqueStakers.length,
    },
    {
      label: "avg blocks between noggles",
      value: Math.trunc(calculateAverageTime(graffitiData)).toLocaleString(
        "en-US",
      ),
    },
  ];

  function calculateAverageTime(array: Graffiti[]) {
    if (array.length < 2) {
      return 0;
    }
    const filteredList = array.filter((graffiti) => +graffiti.slot >= 6160716);
    const timesBetween = filteredList.map((graffiti, i) => {
      if (i === array.length - 1) return 0;
      return +array[i].slot - +array[i + 1].slot;
    });
    const average = timesBetween.reduce((a, b) => a + b) / timesBetween.length;

    return average;
  }

  return (
    <>
      {stats.map(({ label, value }, i) => (
        <div
          className={cx("flex flex-col gap-1 text-center md:w-1/3", textColor)}
          key={i}
        >
          <span className="text-4xl font-bold">
            <CountUp end={+value} />
          </span>
          <span className="font-mono text-sm font-normal">{label}</span>
        </div>
      ))}
    </>
  );
};

export default Stats;
