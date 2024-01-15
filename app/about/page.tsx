import { title } from "@/components/primitives";
import React from "react";

import { Metadata } from 'next';
export const metadata: Metadata = {
	title: '关于我',
	description: '我是谁？',
};

export default function AboutPage() {
	return (
		<>
			<div className={"px-8"}>
				<h1 className={"section-title"}>关于我</h1>
				<h2 className={"section-subtitle"}>随便写点简介吧</h2>
			</div>
			<div>

			</div>
		</>


	);
}
