import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Providers } from "./providers";
import { harmony } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/react";
import React from "react";
import clsx from "clsx";
import NextTopLoader from "nextjs-toploader";
import { IconContext } from "react-icons";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/icon-dark.ico",
	},
};

export default async function RootLayout({children}: { children: React.ReactNode }) {
	return (
		<html suppressHydrationWarning>
		{/*<head />*/}
		<body className={clsx(harmony.className, "antialiased")}>
		<Providers themeProps={{attribute: "class", defaultTheme: "dark"}}>
			<NextTopLoader color={"#3f3f46"} height={5} showSpinner={false} />
			<Navbar />
			<main className="container mx-auto max-w-6xl py-4 px-4 flex-grow">
				{children}
			</main>
			<footer className="w-full flex flex-wrap justify-around items-center gap-2 md:gap-4 lg:gap-8 footer p-4">
				<p>© 2023 Copyright Leon Liang</p>
				<a href="https://beian.miit.gov.cn/" target={"_blank"}>闽ICP备2023005455号-1</a>
				<a href="https://beian.mps.gov.cn/#/" target={"_blank"}>闽公网安备 35020302035710号</a>
			</footer>
		</Providers>
		</body>
		</html>
	);
}
