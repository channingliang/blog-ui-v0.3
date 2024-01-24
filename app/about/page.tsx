import React from "react";

import { Metadata } from 'next';
import { Avatar, Badge } from "@nextui-org/react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
const Map =
	dynamic(() => import("@/components/about/location"), {
		ssr: false,
	});

export const metadata: Metadata = {
	title: '关于我',
	description: '我是谁？',
};

export default function AboutPage() {
	return (
		<>
			<div className={"px-8 pb-4"}>
				<h1 className={"section-title"}>关于我の情报</h1>
				<h2 className={"section-subtitle"}>随便写点简介吧</h2>
			</div>
			<div className={"intro"}>
				<div className={"col-span-8 sm:flex items-center gap-8 border-none"}>
					<Avatar
						className={"mb-8 sm:mb-0 mx-auto flex-shrink-0 w-20 h-20"}
						isBordered
						color={"primary"}
						src="/assets/avatar.jpg"
						radius={"md"}
					/>
					<div className={"flex-grow py-4 px-8 rounded-xl border-2 h-full"}>
						<p>Hello~很高兴在这里见到你❤️</p>
						<p className={"text-[2.5rem] font-bold"}>我叫 LEON</p>
						<p className={"text-lg"}>是一名普通的大学牲、公路车铁驭、超级大吃货、未来的全栈工程师</p>
					</div>
				</div>
				<div className={"col-span-8 py-4 px-8 text-center font-bold bg-foreground"}>
					<p className={"text-[5rem] md:text-[8vw] italic text-background leading-tight"}>
						HELLO WORLD
					</p>
				</div>
				<div className={"col-span-4 relative"}>
					<Map latitude={55.94533} longitude={-3.18711} />
					<div className="absolute bottom-0 left-0 z-10 flex items-center
					 w-full p-4 bg-foreground/70">
						<span className={"text-lg text-background"}>
							正在探索区域
							<span className={"text-xl font-bold"}> Edinburgh, United Kingdom</span>
						</span>
					</div>
				</div>
				<div className={"col-span-4 p-4"}>
					<p>年龄：23</p>
					<p>就读于爱丁堡大学</p>
				</div>
				<div className={"col-span-6 p-4"}>
					<p>STEAM</p>
				</div>
				<div className={"col-span-2 p-4"}>
					<p>最喜欢的游戏</p>
				</div>
				<div className={"col-span-3 p-4"}>
					<p>技术栈</p>
				</div>
				<div className={"col-span-5 p-4"}>
					<p>博客更新日志</p>
				</div>
				<div className={"col-span-5 p-4"}>
					<p>近期动态</p>
				</div>
				<div className={"col-span-3 p-4"}>
					<p>性格测试</p>
				</div>
			</div>


		</>


	);
}
