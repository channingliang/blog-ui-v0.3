import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Pagination } from "@nextui-org/react";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import defaultBg from "@/public/assets/default-bg.jpg";
import { ApiService } from "@/lib/apiService";
import { formatTime } from "@/lib/utils";
import { AdsClick, AccessTime } from "@mui/icons-material";

const api = new ApiService();

async function getData() {
	const res = await api.get('http://localhost:10321/posts?page=1&size=2');
	return await res.json();
}

export default async function PostPage({ searchParams } : {
	searchParams?: {
		page?: string;
	};
}) {
	const currentPage = Number(searchParams?.page) || 1;
	const data: ApiData = await getData();
	const postsPageData: PostsPageData = data.data;
	return (
		<section>
			<div className={"px-8"}>
				<h1 className={"page-title"}>随便写の博文</h1>
				<h2 className={"page-subtitle"}>写文章什么的好麻烦～但是这个板块还是得要！缺了这个还算什么博客呢？</h2>
			</div>
			<div className={"grid grid-cols-1 gap-4"}>
				{
					postsPageData.records.map((post: PostsData) => (
						<Card
							key={post.postId}
							className="h-[160px] sm:h-[250px] border-2"
							shadow={"sm"}
						>
							<CardHeader className="absolute z-10 top-1 flex-col items-start">
								<p className="text-tiny text-white/60 font-bold">LEON</p>
								<h4 className="text-white/90 font-bold text-xl">{post.title}</h4>
							</CardHeader>
							<Image
								className="z-0 w-full h-full object-cover"
								src={post.coverUrl ? post.coverUrl : defaultBg}
								alt="Post cover"
								sizes={"100%"}
								fill
								priority
							/>
							<div className="absolute inset-0 bg-black/30"></div>
							<CardFooter
								className="absolute bg-black/70 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100"
							>
								<div className="flex flex-grow gap-2 items-center">
									<div className="flex gap-2">
										<div className="text-tiny text-white/60 flex items-center">
											<AccessTime sx={{fontSize: 16}} className={"mr-1"}/>
											{formatTime(post.createTime)}
										</div>
										<div className="text-tiny text-white/60 flex items-center">
											<AdsClick sx={{fontSize: 16}} className={"mr-1"}/>
											{post.viewCount}
										</div>
									</div>
								</div>
							</CardFooter>
						</Card>
					))
				}
			</div>
			<div className={"w-full mt-4 flex justify-center"}>
				<Pagination total={postsPageData.pages} initialPage={1} variant={"bordered"} />
			</div>
		</section>
	);
}
