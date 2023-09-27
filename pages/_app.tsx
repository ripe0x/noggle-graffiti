import "./globals.css";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Footer from "@/components/layout/footer";
import { AppProps } from "next/app";
import { useState, useEffect } from "react";

export const metadata = {
  title: "⌐◨-◨ Nouns block graffiti × ETH solo staking",
  description:
    "We see solo staking as something incredibly nounish. It embodies a desire to contribute to the production and maintenance of a public good (in this case Ethereum’s decentralization) with the optimistic view that individuals’ independent judgment and actions can make a difference.",
  twitter: {
    card: "summary_large_image",
    title: "⌐◨-◨ Nouns block graffiti × ETH solo staking",
    description:
      "We see solo staking as something incredibly nounish. It embodies a desire to contribute to the production and maintenance of a public good (in this case Ethereum’s decentralization) with the optimistic view that individuals’ independent judgment and actions can make a difference.",
    creator: "@nounsdao",
  },
  metadataBase: new URL("https://nogglesgraffiti.wtf"),
  themeColor: "#FFF",
  icons: new URL("https://nogglesgraffiti.wtf/favicon.ico"),
};

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Component {...pageProps} />
  );
}

export default MyApp;
