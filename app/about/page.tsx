import React from "react";

import { Metadata } from 'next';
import { Avatar, Badge, Card, CardHeader, CardFooter, Divider, Image, Link, User, Chip } from "@nextui-org/react";
import dynamic from "next/dynamic";
import { calculateAge } from "@/lib/utils";
import HackedText from "@/components/about/hello";
import { MyIcon } from "@/components/my-icon";
import { LuGamepad2, LuSwords, LuBarChartHorizontalBig, LuNavigation, LuMap } from "react-icons/lu";
import { FaSteam } from "react-icons/fa";
import { MdGamepad } from "react-icons/md";

import skills from "@/lib/static-data";
import Personality from "@/components/about/personality";

const Map = dynamic(
	() => import("@/components/about/location"), { ssr: false }
);

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
						<p>Hello~很高兴见到你❤️</p>
						<p className={"text-[2.5rem] font-bold"}>我是 LEON</p>
						<p className={"text-lg"}>一名普通的学牲、公路车铁驭、超级大吃货、科技追随者、虚拟世界探险家</p>
					</div>
				</div>
				<div className={"col-span-8 py-4 text-center bg-foreground overflow-hidden"}>
					<HackedText content={"HELLOWORLD"}/>
				</div>
				<div className={"col-span-4 p-4 leading-10"}>
					<div className={""}>
						<LuGamepad2 className={"inline align-middle mr-2"}/>
						地球ONLINE 已升到
						<span className={"emphasis"}>{calculateAge()}</span>
						级，目前仍在努力练等
					</div>
					<div>
						<LuGamepad2 className={"inline align-middle mr-2"}/>
						顺利完成
						<span className={"emphasis"}>福州大学</span>
						新手任务，获得技能<span className={"sub-emphasis"}>“软件工程”</span>
					</div>
					<div>
						<LuGamepad2 className={"inline align-middle mr-2"}/>
						正在推进<span className={"emphasis"}>爱丁堡大学</span>高级任务
					</div>
					<div>
						<LuGamepad2 className={"inline align-middle mr-2"}/>
						预期解锁<span className={"sub-emphasis"}>“全栈工程师”</span>成就
					</div>
					<div>
						<LuGamepad2 className={"inline align-middle mr-2"}/>
						永久技能加点较为平均，看来需要爆肝了...
					</div>
				</div>
				<div className={"col-span-4 relative overflow-hidden h-[250px] sm:min-h-[250px]"}>
					<Map latitude={55.94533} longitude={-3.18711}/>
					<div className="absolute bottom-0 left-0 z-10 flex items-center
					 w-full p-4 bg-foreground/70">
						<span className={"text-lg text-background flex flex-wrap items-center gap-2"}>
							<MyIcon icon={LuMap} size={20}/>
							正在探索
							<span className={"text-xl font-bold"}> Edinburgh, United Kingdom</span>
						</span>
					</div>
				</div>
				<div className="col-span-5 relative overflow-hidden">
					<Image
						removeWrapper
						alt="cs2"
						className="z-0 w-full h-full object-cover rounded-none"
						src="/assets/cs-cover.jpg"
					/>
					<div className="absolute top-0 left-0 p-4 w-full h-full bg-background/20">
						<div className="flex items-center gap-2">
							<MyIcon icon={MdGamepad} size={20}/>
							<p className="text-xl font-bold">完成度最高的任务</p>
						</div>
					</div>
				</div>
				<div className={"col-span-3 h-[150px] sm:min-h-[150px]"}>
					<Card
						className="w-full h-full"
						as={Link}
						isExternal
						href={"https://steamcommunity.com/id/109904/"}
					>
						<Image
							removeWrapper
							alt="steam"
							className="z-0 w-full h-full object-cover rounded-none"
							src="/assets/steam.jpg"
						/>
						<div className="absolute inset-0 bg-background/20 p-4 flex flex-col justify-between h-full">
							<User
								className={"flex justify-start"}
								name={(
									<p className={"text-[1.5rem] font-bold mb-4 ml-1"}>13on</p>
								)}
								description={(
									<div className="flex ml-2 gap-2 h-5 items-center text-small text-foreground">
										<MyIcon icon={FaSteam} className={"text-foreground"} size={22}/>
										<div>
									<span
										className={"flex justify-center items-center text-tiny" +
											" rounded-full w-6 h-6 border-2 border-[#467a3c]"}
									>
										40
									</span>
										</div>
									</div>
								)}
								avatarProps={{
									className: "h-20 w-20 bg-transparent",
									src: "/assets/steam-avatar.gif",
									radius: "none",
								}}
							/>
							<div className="flex justify-end items-center gap-2 text-xl font-bold">
								<MyIcon
									icon={LuNavigation}
									size={20}
								/>
								<p>异世界的入口</p>
							</div>
						</div>
					</Card>
				</div>

				<div className={"col-span-3 flex flex-wrap gap-2 p-4 pt-0 max-h-[250px] sm:max-h-[350px] overflow-auto"}>
					<div
						className={"sticky pt-4 pb-1 pl-1 top-0 w-full bg-background/30" +
							" backdrop-blur-lg z-10 text-xl font-bold flex items-center gap-2"}
					>
						<MyIcon icon={LuSwords} size={20}/>技能列表
					</div>
					{
						skills.map((skill, index) => (
							<Chip
								className={"py-4"}
								style={{ borderColor: skill.color }}
								key={index}
								endContent={<MyIcon icon={skill.icon} color={skill.color} size={24}/>}
								variant="bordered"
								size={"lg"}
							>
								<p className={"mr-2"}>{skill.name}</p>
							</Chip>
						))
					}
					<Chip className={"py-4"} variant="bordered" size={"lg"}>. . .</Chip>
				</div>
				<div className="col-span-5 relative overflow-hidden h-[300px] sm:h-full">
					<Image
						removeWrapper
						alt="esfp"
						className="z-0 w-full h-full object-cover rounded-none"
						src="/assets/ESFP.jpg"
					/>
					<div className="absolute top-0 left-0 p-4 w-full h-full bg-background/60 flex gap-4 overflow-auto">
						<div className={"w-36 sm:w-44 flex flex-col justify-between"}>
							<p className="text-xl font-bold flex items-center gap-2">
								<MyIcon
									icon={LuBarChartHorizontalBig}
									size={20}
								/>
								角色属性
							</p>
							<p className={"text-[#E4AE3A] font-black text-4xl"}>ESFP-A</p>
							<p className="text-[#E4AE3A] text-3xl font-bold">表演者</p>
							<p className="text-md my-4">“表演者精力充沛、热情，总是心血来潮--有他们在身边，生活永远不会无聊”</p>
							<p className="text-[0.6rem]">我怎么会是ESFP呢？<br/>奈何测了五遍都是这个😓</p>
						</div>
						<div className={"flex-1"}>
							<Personality/>
						</div>
					</div>
				</div>
				<div className={"col-span-8 p-4 text-center"}>更多模块正在陆续载入中...</div>
			</div>


		</>


	);
}
