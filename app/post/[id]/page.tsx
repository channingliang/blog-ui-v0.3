import { ApiService } from "@/lib/apiService";
import Guide from "@/components/post/guide";
import React from "react";
import Image from "next/image";
import cover from "@/public/assets/default-bg.jpg";

export default async function PostPage({ params }: { params: { id: string } }) {
	const postId = params.id;
	const api = new ApiService();

	async function getData() {
		const res = await api.get('http://localhost:10321/posts/' + postId);
		return await res.json();
	}

	const data: ApiData = await getData();
	const postData: PostData = data.data;

	return (
		<section>
			<div className="md:flex grid grid-cols-1 gap-4">
				<div className="flex-1 border-2 rounded-xl">
					<Image
						className={"rounded-t-xl"}
						src={postData.coverUrl ? postData.coverUrl : cover}
						alt={'Post cover'}
						width={1920}
						height={1080}
					/>
					<div className={"p-4"}>
						{postData.content}
					</div>
				</div>
				<Guide post={postData}/>
			</div>
		</section>
	);
}
