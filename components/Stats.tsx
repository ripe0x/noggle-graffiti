import React, { use, useEffect, useState } from "react";
import cx from "classnames";
import { Graffiti } from "@/lib/types";
import CountUp from "react-countup";
import useSWR from 'swr'
import axios from 'axios'

interface StatsData {
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

type Props = {
  // statsData: {
  //   slots: {
  //     total: {
  //       count: string;
  //     },
  //     monthly: {
  //       count: string;
  //       percentage: number;
  //     },
  //     weekly: {
  //       count: string;
  //       percentage: number;
  //     },
  //     daily: {
  //       count: string;
  //       percentage: number;
  //     },
  //   },
  //   validators: {
  //     total: {
  //       count: string;
  //       unique_addresses: string;
  //     },
  //   }
  // }
  textColor?: string;
};
async function getStats() {
  const res = await fetch("https://api.nogglesgraffiti.wtf/stats", { cache: 'no-store' });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Stats = ({ textColor }: Props) => {
  // const url = 'https://api.nogglesgraffiti.wtf/stats'
  // const fetcher = (url: string) => axios.get(url).then(res => res.data);
  // const { data, error } = useSWR("https://api.nogglesgraffiti.wtf/stats", fetcher);
  // console.log('data', data);
  const [statsData, setStatsData] = useState<StatsData>();

  // useEffect(() => {
  //   const statsData = getStats();
  //   statsData.then((data) => setStatsData(data));
  // }, []);

  useEffect(() => {
    fetch('https://api.nogglesgraffiti.wtf/stats')
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data);
        setStatsData(data);
      })
  }, [])


  const stats = [
    {
      label: "noggle graffiti blocks",
      value: statsData ? statsData?.slots.total.count : "",
    },
    {
      label: "validator graffiti artists",
      value: statsData ? statsData?.validators.total.unique_addresses : "",
    },
    {
      label: "percentage of blocks (past 7 days)",
      value: statsData ? `${statsData?.slots.weekly.percentage.toFixed(2)}` : '',
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
            {i === 2 && value && (
              <>
                {/* <CountUp start={0} end={+value} decimals={2} /> */}
                {value}%</>
            )}
            {i !== 2 && value && (
              <>
                {/* <CountUp start={69} end={+value} /> */}
                {value}
              </>
            )}

          </span>
          <span className="font-mono text-sm font-normal">{label}</span>
        </div>
      ))}
    </>
  );
};

export default Stats;
