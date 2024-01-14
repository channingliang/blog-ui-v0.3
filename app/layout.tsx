import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Providers } from "./providers";
import { harmony } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Divider } from "@nextui-org/react";
import React from "react";
import clsx from "clsx";

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
		<head />
		<body className={clsx(harmony.className, "antialiased")}>
		<Providers themeProps={{attribute: "class", defaultTheme: "dark"}}>
			<Navbar />
			<main className="container mx-auto max-w-6xl py-4 px-4 flex-grow">
				{children}
			</main>
			<footer className="w-full flex items-center justify-center p-4">
				<div className="flex items-center space-x-4 text-[.8rem] text-white/30">
					<div>© 2023 Copyright Leon Liang</div>
					<Divider orientation="vertical"/>
					<div>闽ICP备2023005455号-1</div>
					<Divider orientation="vertical"/>
					<div>闽公网安备 35020302035710号</div>
				</div>
			</footer>
		</Providers>

		</body>
		</html>
	);
}
