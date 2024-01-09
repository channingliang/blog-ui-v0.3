import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Providers } from "./providers";

import { harmony } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import { Avatar } from "@nextui-org/react";
import TypedText from "@/components/typed-text";
import TitledDiv from "@/components/sidebar/titled-div";
import Runtime from "@/components/sidebar/run-time";
import React, { Suspense } from "react";
import InfoCard from "@/components/sidebar/info-card";
import { Article, Bookmark, Comment, Favorite, Photo } from "@mui/icons-material";
import { ApiService } from "@/lib/apiService";

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

const api = new ApiService();

async function getData() {
	const res = await api.get('https://www.stayuplate.icu/api/general/info');
	return await res.json();
}

export default async function RootLayout({children}: { children: React.ReactNode }) {
	const data: ApiData = await getData();
	const blogData: BlogData = data.data;
	return (
		<html suppressHydrationWarning>
		<head />
		<body className={harmony.className}>
		<Providers themeProps={{attribute: "class", defaultTheme: "dark"}}>
			<Navbar />
			<main className="container mx-auto max-w-5xl pt-6 px-6 flex-grow">
				<div className="md:flex grid grid-cols-1 gap-4">
					<div className="flex-1">
						{children}
					</div>
					<div className="md:w-72 w-full">
						<div className="grid grid-cols-1 gap-4">
							<div className="h-12 flex items-center">
								<Avatar
									className={"ml-1 mr-5"}
									isBordered
									isFocusable
									as={Link}
									radius={"sm"}
									color={"primary"}
									src="/assets/avatar.jpg"
									href="/about"/>
								<div className="sidebar-box w-full md:w-auto">
									<TypedText
										strings={["Hi~我是Leon", "精神状态良好", "坚持早睡早起", "绝对不会熬夜"]}/>
								</div>
							</div>
							<div className="h-12 flex items-center">
								<TitledDiv title={"已熬夜"}>
									<Runtime className={"text-sm md:w-auto w-full"}/>
								</TitledDiv>
							</div>
							<div className="h-12 flex items-center w-full md:w-auto">
								<TitledDiv title={"近期状态"}>
									<div>学习中</div>
								</TitledDiv>
								<div className={"sidebar-box ml-4"}>
									<p className={"text-xl"}>📚</p>
								</div>
							</div>
						</div>
						<div className="md:sticky md:top-16 grid grid-cols-1 gap-4 pt-4">
							<TitledDiv title={"本站数据"}
									   className={"sticky top-0 flex flex-wrap md:grid md:grid-cols-2 gap-4 py-4 w-full"}>
								<InfoCard
									IconComponent={Article}
									mainText={"记录 " + blogData.articleCount + " 篇"}
									secondaryText="博文"/>
								<InfoCard
									IconComponent={Photo}
									mainText={"上传 " + blogData.photoCount + " 张"}
									secondaryText="照片"/>
								<InfoCard
									IconComponent={Favorite}
									mainText={"发布 " + blogData.journalCount + " 次"}
									secondaryText="动态"/>
								<InfoCard
									IconComponent={Bookmark}
									mainText={"添加 " + blogData.tagCount + " 个"}
									secondaryText="标签"/>
								<InfoCard
									IconComponent={Comment}
									mainText={"收集 " + blogData.commentCount + " 条"}
									secondaryText="评论"/>
							</TitledDiv>
							<TitledDiv title={"近期更新"}
									   className={"h-[200px] flex flex-wrap md:grid md:grid-cols-1 gap-4 py-4 w-full"}>
							</TitledDiv>
						</div>

					</div>
				</div>
			</main>
			<footer className="w-full flex items-center justify-center py-3">
				<Link
					isExternal
					className="flex items-center gap-1 text-current"
					href="#"
					title="nextui.org homepage"
				>
					<span className="text-default-600">Powered by</span>
					<p className="text-primary">NextUI</p>
				</Link>
			</footer>
		</Providers>

		</body>
		</html>
	);
}
