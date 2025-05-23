import React from "react";
import { ApiService } from "@/lib/apiService";
import { BreadcrumbItemProps, Card, CardFooter, Link, Image, Chip } from "@nextui-org/react";
import Markdown from "@/components/post/markdown";
import IBreadcrumbs from "@/components/breadcrumbs";
import GuideSide from "@/components/post/guide-side";
import GuideFixed from "@/components/post/guide-fixed";
import { formatTimeZH } from "@/lib/utils";
import { LuCalendarCheck2, LuPenLine, LuMousePointerClick } from "react-icons/lu";
import { MyIcon } from "@/components/my-icon";

export default async function PostPage({ params }: { params: { id: string } }) {
	const postId = params.id;
	const api = new ApiService();

	async function getPostData() {
		const res = await api.get('posts/' + postId, {
			next: { revalidate: 86400 }
		});
		return await res.json();
	}



	const postData = await getPostData();

	const post: PostDetail = postData.data;
	const breadcrumbItems: BreadcrumbItemProps[] = [
		{ href: "/posts", children: "博文" },
		{ href: "/posts/" + postId, children: post.title }
	];

	return (
		<section className="lg:flex grid grid-cols-1 gap-4">
			<div className="flex-1">
				<div className={"border-2 rounded-xl mb-4 p-4"}>
					<IBreadcrumbs items={breadcrumbItems}/>
				</div>
				<Card
					className="h-[160px] sm:h-[300px] border-2"
					shadow={"sm"}
				>
					<Image
						alt="Post cover"
						className="z-0 w-full h-full object-cover"
						src={post.coverUrl ? post.coverUrl : "https://pic.stayuplate.icu/ui/default-bg.jpg"}
					/>
					<CardFooter
						className="absolute bg-background/20 bottom-0 z-10
						border-t-1 border-white/40 dark:border-default-100"
					>
						<div
							className="w-full py-2 flex items-center justify-center text-2xl text-white font-bold uppercase">
							{post.title}
						</div>
					</CardFooter>
				</Card>
				<div className={"flex flex-col gap-2 lg:hidden border-2 rounded-xl my-4 p-4"}>
					<div className={"text-lg flex items-center"}>
						<MyIcon icon={LuMousePointerClick} /><span className={"text-xs"}>{post.viewCount}</span>
						<span className={"ml-3"}>{post.subtitle}</span>
					</div>
					<div className={"flex flex-wrap gap-2 sm:gap-4"}>
						<span className={"flex items-center text-sm text-foreground/50"}>
							<MyIcon icon={LuCalendarCheck2} className={"mr-1"} />{formatTimeZH(post.createTime)}
						</span>
						{post.editTime && <span
							className={"flex items-center text-sm text-foreground/50"}>
							<MyIcon icon={LuPenLine} className={"mr-1"} /> {formatTimeZH(post.editTime)}
						</span>
						}
					</div>
					<div className={"flex flex-wrap gap-1"}>
						{post.tags && post.tags.length > 0 ? (
							post.tags.map((tag, index) => (
								<Chip
									className={"rounded-xl text-[.8rem]"}
									key={index}
									color="primary"
									variant="dot"
								>
									{tag.name}
								</Chip>
							))
						) : (
							<p className={"text-small text-white/50"}>-未添加标签-</p>
						)}
					</div>
				</div>
				<div className={"my-4"}>
					<Markdown content={post.content}/>
				</div>
				<div id={"postNav"} className={"border-2 rounded-xl p-4 flex flex-wrap items-center justify-between gap-2"}>
					{post.prev ?
						<div>
							<span className={"text-small"}>上一篇：</span>
							<Link underline={"hover"}
								  href={"/post/" + post.prev.postId}>{post.prev.title}</Link>
						</div> :
						<p className={"text-small"}>没有更多了~</p>}
					{post.next ?
						<div>
							<span className={"text-small"}>下一篇：</span>
							<Link underline={"hover"}
								  href={"/post/" + post.next.postId}>{post.next.title}</Link>
						</div>
						: <p className={"text-small"}>没有更多了~</p>}
				</div>
			</div>
			<div className="lg:w-72 w-full lg:block hidden">
				<GuideSide post={post}/>
			</div>
			<div className={"lg:hidden fixed bottom-4 right-2 "}>
				<GuideFixed content={post.content}/>
			</div>
		</section>
	);
}
