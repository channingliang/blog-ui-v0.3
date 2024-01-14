import React from "react";
import { ApiService } from "@/lib/apiService";

export default async function PostLayout({ params, children }: { params: { id: string }, children: React.ReactNode }) {
	const postId = params.id;
	const api = new ApiService();

	async function getData() {
		const res = await api.get('http://localhost:10321/posts/' + postId);
		return await res.json();
	}

	const data: ApiData = await getData();
	const postData: PostData = data.data;

	return (
		<div className="md:flex grid grid-cols-1 gap-4">
			<div className="flex-1">
				{children}
			</div>
		</div>


	);
}
