import React from "react";

import { Metadata } from 'next';
import { Avatar, Badge } from "@nextui-org/react";
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
			<div className={"intro flex sm:grid grid-cols-6 gap-4"}>
				<div className={"col-span-4 border-2"}>你好</div>
				<div className={"col-span-2 border-2 p-4"}>
					<Badge color="success" shape="circle" placement="bottom-right" className={"w-8 h-8"}>
						<Avatar
							className={"w-24 h-24"}
							src="/assets/avatar.jpg"
							radius={"md"}
						/>
					</Badge>
				</div>
			</div>
		</>


	);
}
