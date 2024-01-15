import React from "react";
import { ApiService } from "@/lib/apiService";
import Image from "next/image";
import cover from "@/public/assets/default-bg.jpg";
import { BreadcrumbItemProps, Card, CardFooter } from "@nextui-org/react";
import Markdown from "@/components/post/markdown";
import Guide from "@/components/post/guide";
import IBreadcrumbs from "@/components/breadcrumbs";

export default async function PostPage({ params }: { params: { id: string } }) {
	const postId = params.id;
	const api = new ApiService();

	async function getData() {
		// const res = await api.get('http://localhost:10321/posts/' + postId,
		// 	{ next: { revalidate: 86400 } });
		const res = await api.get('http://localhost:10321/posts/' + postId,
			{ cache: "no-store" });
		return await res.json();
	}

	const data: ApiData = await getData();
	const postData: PostData = data.data;

	const breadcrumbItems: BreadcrumbItemProps[] = [
		{ href: "/posts", children: "博文" },
		{ href: "/posts/" + postId, children: postData.title }
	];

	return (
		<section className="lg:flex grid grid-cols-1 gap-4">
			<div className="flex-1">
				<div className={"border-2 rounded-xl mb-4 p-4"}>
					<IBreadcrumbs items={breadcrumbItems} />
				</div>
				<Card
					className="h-[160px] sm:h-[300px] border-2"
					shadow={"sm"}
				>
					<Image
						className="z-0 w-full h-full object-cover"
						src={postData.coverUrl ? postData.coverUrl : cover}
						alt="Post cover"
						priority
						sizes={"100%"}
						fill
					/>
					<CardFooter
						className="absolute bg-background/20 bottom-0 z-10
						border-t-1 border-white/40 dark:border-default-100"
					>
						<div
							className="w-full py-2 flex items-center justify-center text-2xl text-white font-bold uppercase">
							{postData.title}
						</div>
					</CardFooter>
				</Card>
				<div className={"my-4"}>
					<Markdown content={postData.content}/>
				</div>
				<div id={"postNav"}>
					postNav
				</div>
			</div>
			<div className="lg:w-72 w-full">
				<Guide post={postData}/>
			</div>
		</section>
	);
}
