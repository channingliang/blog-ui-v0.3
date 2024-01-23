'use client';

import React from "react";

import { Metadata } from 'next';
import { Avatar, Badge } from "@nextui-org/react";
import { motion } from "framer-motion";

// export const metadata: Metadata = {
// 	title: '关于我',
// 	description: '我是谁？',
// };

export default function AboutPage() {
	return (
		<>
			<div className={"px-8"}>
				<h1 className={"section-title"}>关于我</h1>
				<h2 className={"section-subtitle"}>随便写点简介吧</h2>
			</div>
			<div className={"intro "}>
				<div className={"col-span-2 flex justify-between"}>
					<Badge color="success" shape="circle" placement="bottom-right" className={"w-8 h-8"}>
						<Avatar
							className={"w-24 h-24"}
							src="/assets/avatar.jpg"
							radius={"md"}
						/>
					</Badge>
					<motion.div
						animate={{
							scale: [1, 1.5, 1],
							color: ["#ff0000", "#00ff00", "#0000ff", "#ff0000"],
						}}
						transition={{
							duration: 2,
							ease: "easeInOut",
							loop: Infinity,
						}}
					>
						<h1>欢迎来到我的博客！</h1>
					</motion.div>
				</div>
				<div className={"col-span-4"}>你好</div>

			</div>


		</>


	);
}
