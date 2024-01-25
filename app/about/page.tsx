import React from "react";

import { Metadata } from 'next';
import { Avatar, Badge, Card, CardHeader, Image, Link, User } from "@nextui-org/react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { calculateAge } from "@/lib/utils";
import HackedText from "@/components/about/hello";
import { Gamepad2 } from "lucide-react";

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
					<div className={"flex-grow py-4 px-8 rounded-xl border-2"}>
						<p>Hello~很高兴在这里见到你❤️</p>
						<p className={"text-[2.5rem] font-bold"}>我叫 LEON</p>
						<p className={"text-lg"}>是一名普通的学牲、公路车铁驭、超级大吃货、科技追随者、虚拟世界探险家</p>
					</div>
				</div>
				<div className={"col-span-8 py-4 text-center bg-foreground overflow-hidden"}>
					<HackedText content={"HELLOWORLD"}/>
				</div>
				<div className={"col-span-4 relative overflow-hidden h-[250px] sm:min-h-[250px]"}>
					<Map latitude={55.94533} longitude={-3.18711}/>
					<div className="absolute bottom-0 left-0 z-10 flex items-center
					 w-full p-4 bg-foreground/70">
						<span className={"text-lg text-background"}>
							正在探索
							<span className={"text-xl font-bold"}> Edinburgh, United Kingdom</span>
						</span>
					</div>
				</div>
				<div className={"col-span-4 p-4 leading-10"}>
					<div className={""}>
						<Gamepad2 className={"inline align-middle mr-2"} />
						地球模拟器已升到
						<span className={"emphasis"}>{calculateAge()}</span>
						级，目前仍在尝试找到作弊代码
					</div>
					<div>
						<Gamepad2 className={"inline align-middle mr-2"} />
						顺利完成
						<span className={"emphasis"}>福州大学</span>
						新手任务，获得技能<span className={"sub-emphasis"}>“软件工程”</span>
					</div>
					<div>
						<Gamepad2 className={"inline align-middle mr-2"} />
						正在推进<span className={"emphasis"}>爱丁堡大学</span>高级任务
					</div>
					<div>
						<Gamepad2 className={"inline align-middle mr-2"} />
						预期解锁<span className={"sub-emphasis"}>“全栈工程师”</span>成就
					</div>
					<div>
						<Gamepad2 className={"inline align-middle mr-2"} />
						永久技能加点较为平均，看来需要爆肝了...
					</div>
				</div>
				<Card className="col-span-5">
					<CardHeader className="absolute z-10 top-1 flex-col !items-start">
						<p className="text-2xl font-bold">最喜欢的游戏</p>
					</CardHeader>
					<Image
						removeWrapper
						alt="cs2"
						className="z-0 w-full h-full object-cover rounded-none"
						src="/assets/cs-cover.jpg"
					/>
					<div className="absolute inset-0 bg-background/20"></div>
				</Card>
				<div className={"col-span-3 p-4 overflow-hidden"}>
					<User
						name="STEAM"
						description={(
							<Link href="https://steamcommunity.com/id/109904/" size="sm" isExternal>
								@13ON
							</Link>
						)}
						avatarProps={{
							src: "https://avatars.githubusercontent.com/u/30373425?v=4"
						}}
					/>
				</div>
				<div className={"col-span-3 p-4"}>
					<p>技术栈</p>
				</div>
				<div className={"col-span-5 p-4"}>
					<p>博客更新日志</p>
				</div>
				<div className={"col-span-6 p-4"}>
					<p>近期动态</p>
				</div>
				<div className={"col-span-2 p-4"}>
					<p>性格测试</p>
				</div>
			</div>


		</>


	);
}
