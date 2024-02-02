import { ApiService } from "@/lib/apiService";
import IPagination from "@/components/pagination";
import PostCard from "@/components/post/card";
import React from "react";

export default async function PostsPage({ searchParams } : {
	searchParams?: {
		page?: string;
	};
}) {
	const api = new ApiService();
	async function getData(page: number) {
		const res = await api.get('posts', {
			params: {
				page: page,
				size: 10
			},
			next: { revalidate: 60 }
		});
		return await res.json();
	}

	const currentPage = Number(searchParams?.page) || 1;
	const data: ApiData = await getData(currentPage);
	const pageData = data.data as PageData & { records: PostPageView[] };
	return (
		<section>
			<div className={"px-8"}>
				<h1 className={"section-title"}>随便写の博文</h1>
				<h2 className={"section-subtitle"}>写文章什么的好麻烦～但缺了这个还叫博客吗？虽然本来只准备做个相册的哈哈~</h2>
			</div>
			<div className={"grid grid-cols-1 gap-4"}>
				{
					pageData.records.map((post: PostPageView) => (
						<PostCard key={post.postId} post={post} />
					))
				}
			</div>
			<div className={"w-full mt-4 flex justify-center"}>
				<IPagination path={"posts"} totalPages={pageData.pages}></IPagination>
			</div>
		</section>
	);
}
