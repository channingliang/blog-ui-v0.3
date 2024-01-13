import { ApiService } from "@/lib/apiService";
import Guide from "@/components/post/post-guide";
import React from "react";
import Image from "next/image";
import cover from "@/public/assets/default-bg.jpg";
import { Card, CardFooter, CardHeader } from "@nextui-org/react";
import PostMarkdown from "@/components/post/post-markdown";

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

	return (
		<section className="flex gap-4">
			<div className="flex-1 border-2 rounded-xl">
				<Card
					className="h-[160px] sm:h-[300px] rounded-b-none"
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
						className="absolute bg-white/10 dark:bg-black/70 bottom-0 z-10
						border-t-1 border-white/30 dark:border-default-100"
					>
						<div className="w-full py-2 flex items-center justify-center text-2xl text-white font-bold uppercase">
							{postData.title}
						</div>
					</CardFooter>
				</Card>
				<PostMarkdown content={postData.content} />
			</div>
			<Guide post={postData}/>
		</section>
	);
}
