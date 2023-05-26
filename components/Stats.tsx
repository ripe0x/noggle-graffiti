"use client";
import React, { use, useEffect, useState } from "react";
import cx from "classnames";
import { Graffiti } from "@/lib/types";
import CountUp from "react-countup";

type Props = {
  statsData: {
    slots: {
      total: {
        count: string;
      },
      monthly: {
        count: string;
        percentage: number;
      },
      weekly: {
        count: string;
        percentage: number;
      },
      daily: {
        count: string;
        percentage: number;
      },
    },
    validators: {
      total: {
        count: string;
        unique_addresses: string;
      },
    }
  }
  textColor?: string;
};


const Stats = ({ statsData, textColor }: Props) => {
  const stats = [
    {
      label: "noggle graffiti blocks",
      value: statsData.slots.total.count,
    },
    {
      label: "validator graffiti artists",
      value: statsData.validators.total.unique_addresses,
    },
    {
      label: "percentage of blocks (past 7 days)",
      value: `${statsData.slots.weekly.percentage.toFixed(2)}`,
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
            {i === 2 && (
              <><CountUp start={0} end={+value} decimals={2} />%</>
            )}
            {i !== 2 && (
              <><CountUp start={69} end={+value} /></>
            )}

          </span>
          <span className="font-mono text-sm font-normal">{label}</span>
        </div>
      ))}
    </>
  );
};

export default Stats;
