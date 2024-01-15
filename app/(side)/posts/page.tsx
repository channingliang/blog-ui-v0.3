import { ApiService } from "@/lib/apiService";
import IPagination from "@/components/pagination";
import PostCard from "@/components/post/card";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import React from "react";

export default async function PostsPage({ searchParams } : {
	searchParams?: {
		page?: string;
	};
}) {
	const api = new ApiService();
	async function getData(page: number) {
		const res = await api.get('http://localhost:10321/posts', {
			params: {
				page: page,
				size: 2
			},
			next: { revalidate: 3600 }
		});
		return await res.json();
	}

	const currentPage = Number(searchParams?.page) || 1;
	const data: ApiData = await getData(currentPage);
	const postsPageData: PostsPageData = data.data;
	return (
		<section>
			<div className={"px-8"}>
				<h1 className={"section-title"}>随便写の博文</h1>
				<h2 className={"section-subtitle"}>写文章什么的好麻烦～但是这个板块还是得有！缺了这个还算什么博客呢？</h2>
			</div>
			<div className={"grid grid-cols-1 gap-4"}>
				{
					postsPageData.records.map((post: PostsData) => (
						<PostCard key={post.postId} post={post} />
					))
				}
			</div>
			<div className={"w-full mt-4 flex justify-center"}>
				<IPagination path={"posts"} totalPages={postsPageData.pages}></IPagination>
			</div>
		</section>
	);
}
