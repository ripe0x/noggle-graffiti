"use client"; // this is a client component 👈🏽
import React from "react";
import cx from "classnames";
import { Graffiti } from "@/lib/types";
import { truncateAddress } from "@/lib/utils";
import TimeAgo from 'react-timeago'

type Props = {
  textColor?: string;
  bgColor?: string;
  graffitiData?: Graffiti[];
};

const GraffitiTable = ({ graffitiData, textColor, bgColor }: Props) => {
  // const stakerScore = (graffitiData: Graffiti[], proposerId: string) => {
  //   const occurrences = graffitiData.filter(
  //     (graffiti) => graffiti.proposerId === proposerId,
  //   ).length;
  //   return occurrences;
  // };

  return (
    <div>
      <table className="w-full table-auto">
        <thead className={cx("sticky top-0 z-10", bgColor)}>
          <tr
            className={cx(
              "bold flex w-full flex-row justify-start gap-6 md:gap-8 font-mono text-sm",
              textColor,
            )}
          >
            <th className="w-[20%] text-start md:w-[15%]">block</th>
            <th className="w-[20%] md:w-[30%] text-start">validator <span className="hidden md:inline">address</span></th>
            <th className="w-[60%] md:w-[40%] text-start">graffiti</th>
          </tr>
        </thead>
        <tbody>
          {graffitiData &&
            graffitiData.map((graffiti: Graffiti, i) => (
              <tr
                key={i}
                className="flex w-full flex-row justify-start gap-6 md:gap-8 border-b border-b-[#344B75] py-2 md:py-4 font-mono text-xs md:text-sm"
              >
                <td className={cx("w-[20%] md:w-[15%]", textColor)}>
                  <a
                    href={`https://beaconcha.in/block/${graffiti.block}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {graffiti.block}
                    <span className="w-full block text-[9px] md:text-[10px] font-normal leading-none opacity-60 hover:opacity-80 transition-opacity">
                      <TimeAgo date={(+graffiti.timestamp * 1000)} />
                    </span>
                  </a>
                </td>
                <td className={cx("w-[20%] md:w-[30%] md:font-bold", textColor)}>
                  {graffiti.feeRecipient ? (
                    <a
                      href={`https://etherscan.io/address/${graffiti.feeRecipient}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="hidden md:block">{graffiti.feeRecipient ? truncateAddress(graffiti.feeRecipient, 6) : graffiti.proposerId}</span>
                      <span className="md:hidden">{graffiti.feeRecipient ? truncateAddress(graffiti.feeRecipient, 3) : graffiti.proposerId}</span>
                    </a>
                  ) : (
                    <a
                      href={`https://beaconcha.in/validator/${graffiti.proposerId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {graffiti.proposerId}
                    </a>
                  )}

                  <span className="block text-[10px] font-normal leading-none opacity-60">
                    {/* {stakerScore(graffitiData, graffiti.proposerId)} tagged
                    block
                    {stakerScore(graffitiData, graffiti.proposerId) !== 1 && "s"} */}
                    {!graffiti.feeRecipient && (
                      <span className="mt-1 block text-[9px] md:text-[10px] font-normal italic leading-none opacity-60">no fee recipient. proposer ID displayed instead</span>
                    )}
                  </span>
                </td>
                <td className={cx("w-[60%] md:w-[40%]", textColor)}>
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
