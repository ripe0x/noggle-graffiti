"use client"; // this is a client component 👈🏽
import React, { useEffect, useState } from "react";
import cx from "classnames";
import { Graffiti } from "@/lib/types";
import { truncate, truncateAddress } from "@/lib/utils";
type Props = {
  textColor?: string;
  graffitiData?: Graffiti[];
};

const GraffitiTable = ({ graffitiData, textColor }: Props) => {
  const stakerScore = (graffitiData: Graffiti[], proposerId: string) => {
    const occurrences = graffitiData.filter(
      (graffiti) => graffiti.proposerId === proposerId,
    ).length;
    return occurrences;
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto">
        <thead className="sticky top-2">
          <tr
            className={cx(
              "bold flex w-full flex-row justify-between gap-8 font-mono text-sm",
              textColor,
            )}
          >
            <th className="w-[20%] text-start md:w-[10%]">block</th>
            <th className="w-[30%] text-start">validator address</th>
            <th className="w-[200px] text-start md:w-[40%]">graffiti</th>
          </tr>
        </thead>
        <tbody>
          {graffitiData &&
            graffitiData.map((graffiti: Graffiti, i) => (
              <tr
                key={i}
                className="flex w-full flex-row justify-between gap-8 border-b border-b-[#344B75] py-4 font-mono text-sm"
              >
                <td className={cx("w-[20%] md:w-[10%]", textColor)}>
                  <a
                    href={`https://beaconcha.in/slot/${graffitiData[0].slot}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {graffiti.slot}
                  </a>
                </td>
                <td className={cx("w-[30%] font-bold", textColor)}>
                  <a
                    href={`https://beaconcha.in/validator/${graffitiData[0].proposerId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >

                    {graffiti.feeRecipient ? truncateAddress(graffiti.feeRecipient, 6) : graffiti.proposerId}

                  </a>
                  <span className="block text-[10px] font-normal leading-none opacity-60">
                    {stakerScore(graffitiData, graffiti.proposerId)} tagged
                    block
                    {stakerScore(graffitiData, graffiti.proposerId) !== 1 && "s"}
                    {!graffiti.feeRecipient && (
                      <span className="mt-1 block text-[10px] font-normal italic leading-none opacity-60">no fee recipient. proposer ID displayed instead</span>
                    )}
                  </span>
                </td>
                <td className={cx("w-[200px] md:w-[40%]", textColor)}>
                  {graffiti.graffiti}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default GraffitiTable;
