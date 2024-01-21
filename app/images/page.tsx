import React from "react";
import { ApiService } from "@/lib/apiService";
import ImageCard from "@/components/image/card";
import IPagination from "@/components/pagination";
import { Image } from "@nextui-org/react";

export default async function ImagesPage({ searchParams } : {
	searchParams?: {
		page?: string;
	};
}) {
	const api = new ApiService();
	async function getData(page: number) {
		const res = await api.get('http://localhost:10321/images', {
			params: {
				page: page,
				size: 20
			},
			cache: "no-store"
		});
		return await res.json();
	}

	const currentPage = Number(searchParams?.page) || 1;
	const data: ApiData = await getData(currentPage);
	const pageData = data.data as PageData & { records: ImagesData[] };

	return (
		<section>
			<div className={"px-8"}>
				<h1 className={"section-title"}>我喜欢の照片</h1>
				<h2 className={"section-subtitle"}>并没有十分热爱摄影，只当记录生活的一种方式。也上传一些喜欢的网图~</h2>
			</div>
			<div className={"w-full gap-4 columns-1 sm:columns-2 md:columns-3 lg:columns-4 "}>
				{
					pageData.records.map((image: ImagesData) => (
						<ImageCard image={image} key={image.imageId}/>
					))
				}
			</div>
			<div className={"w-full mt-4 flex justify-center"}>
				<IPagination path={"images"} totalPages={pageData.pages}></IPagination>
			</div>
		</section>
	);
}
