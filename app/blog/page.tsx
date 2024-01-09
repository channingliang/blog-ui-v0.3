import {Card, CardHeader, CardBody, CardFooter, Divider, Link} from "@nextui-org/react";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import defaultBg from "@/public/assets/default-bg.jpg";
import { ApiService } from "@/lib/apiService";
import { formatTime } from "@/lib/utils";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const api = new ApiService();

async function getData() {
	const res = await api.get('http://localhost:10321/posts?page=1&size=5');
	return await res.json();
}

export default async function BlogPage() {
	const data: ApiData = await getData();
	const postsPageData: PostsPageData = data.data;
	return (
		<div>
			{
				postsPageData.records.map((post: PostsData) => (
					<Card
						key={post.postId}
						className="w-full h-[260px] col-span-12 sm:col-span-7 mb-4 border-2"
						shadow={"sm"}
					>
						<CardHeader className="absolute z-10 top-1 flex-col items-start">
							<p className="text-tiny text-white/60 uppercase font-bold">{post.subtitle}</p>
							<h4 className="text-white/90 font-medium text-xl">{post.title}</h4>
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
							className="absolute bg-black/70 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
							<div className="flex flex-grow gap-2 items-center">
								<div className="flex flex-col ">
									<div className="text-tiny text-white/60 flex items-center">
										<AccessTimeIcon sx={{ fontSize: 16 }} className={"mr-1"}/>
										{formatTime(post.createTime)}
									</div>
								</div>
							</div>
							<Button radius="full" size="sm">Get App</Button>
						</CardFooter>
					</Card>
				))
			}
		</div>
	);
}
