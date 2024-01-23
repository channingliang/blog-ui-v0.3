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
			<div className={"px-8 pb-4"}>
				<h1 className={"section-title"}>关于我の情报</h1>
				<h2 className={"section-subtitle"}>随便写点简介吧</h2>
			</div>
			<div className={"intro"}>
				<div className={"col-span-6 sm:flex items-center gap-8 border-none"}>
					<Avatar
						className={"mb-8 sm:mb-0 mx-auto flex-shrink-0 w-20 h-20"}
						isBordered
						color={"primary"}
						src="/assets/avatar.jpg"
						radius={"md"}
					/>
					<div className={"flex-grow p-4 px-8 rounded-xl border-2 h-full"}>
						<p>Hello~很高兴在这里见到你❤️</p>
						<p className={"text-[2.5rem] font-bold"}>我叫 LEON</p>
						<p className={"text-lg"}>是是一名普普通通的学生、公路车铁驭、超级大吃货、未来可能的全栈工程师</p>
					</div>
				</div>
				<div className={"col-span-6"}>
					<div className="box mb-4 pt-4 pb-6 rounded text-center overflow-hidden h-[200px]">
						<div className="lean-box flex">
							<div className="wrapper mt-[-80px] flex flex-nowrap animate-row-up">
								{Array.from({length: 4}, (_, i) => (
									<div key={i} className="flex flex-col">
										<div
											className="text-[55px] leading-none tracking-[10px] w-[300px] text-white font-bold">Hello~
										</div>
										<div
											className="text-[55px] leading-none tracking-[10px] w-[300px] text-white font-bold mt-1 mb-1"> (｡･∀･)ﾉﾞ
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
				<div className={"col-span-4"}>

				</div>
				<div className={"col-span-2"}>

				</div>


			</div>


		</>


	);
}
