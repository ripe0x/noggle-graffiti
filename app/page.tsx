import cx from "classnames";
import GraffitiTable from "@/components/GraffitiTable";
import Stats from "@/components/Stats";
import { ResolvingMetadata, Metadata } from "next";

type Props = {
  params: { id: string };
};

const metadata = {
  title: "⌐◨-◨ Nouns slot graffiti × ETH solo staking",
  description:
    "We see solo staking as something incredibly nounish. It embodies a desire to contribute to the production and maintenance of a public good (in this case Ethereum’s decentralization) with the optimistic view that individuals’ independent judgment and actions can make a difference.",
  twitter: {
    card: "summary_large_image",
    title: "⌐◨-◨ Nouns slot graffiti × ETH solo staking",
    description:
      "We see solo staking as something incredibly nounish. It embodies a desire to contribute to the production and maintenance of a public good (in this case Ethereum’s decentralization) with the optimistic view that individuals’ independent judgment and actions can make a difference.",
    creator: "@nounsdao",
  },
  metadataBase: new URL("https://nogglesgraffiti.wtf"),
  themeColor: "#FFF",
}



async function getData() {
  const res = await fetch("https://api.nogglesgraffiti.wtf/slots", { cache: 'no-store' });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}


async function getStats() {
  const res = await fetch("https://api.nogglesgraffiti.wtf/stats", { cache: 'no-store' });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const graffitiData = await getData();
  const statsData = await getStats();
  const primaryColor = "#344B75";
  const bgColor = "bg-[#EFEFFA]";
  const textColor = `text-[#344B75]`;
  const horizontalRule = (
    <>
      <hr className={cx("h-px border-0", `bg-[#344B75]`)} />
    </>
  );

  return (
    <>
      <div
        className={cx("z-10 w-full max-w-xl px-5 font-mono xl:px-0", bgColor)}
      >
        <div className="relative">
          {horizontalRule}
          <div className="absolute -top-[0.75rem] h-full w-full text-center">
            <span className={cx("p-2", bgColor, textColor)}>⌐◨-◨</span>
          </div>
        </div>
        <div className="w-full py-8 text-center text-4xl">
          <h1 className={cx("font-mono text-xl", textColor)}>
            Nouns block graffiti &times; ETH solo staking
          </h1>
        </div>
        {horizontalRule}
        <div className="center my-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Stats statsData={statsData} textColor={textColor} />
        </div>
        {horizontalRule}
        <div className="my-8">
          <h2 className={cx("mb-3 text-xl font-bold", textColor)}>
            Latest noggle blocks
          </h2>
          <GraffitiTable graffitiData={graffitiData} textColor={textColor} />
        </div>
      </div>
    </>
  );
}
