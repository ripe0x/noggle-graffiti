import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Footer from "@/components/layout/footer";

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable, "bg-[#EFEFFA]")}>
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-10 md:py-32">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
