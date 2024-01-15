import React from "react";
import { ApiService } from "@/lib/apiService";
import Sidebar from "@/components/sidebar/side-bar";

export default async function RootLayout({children}: { children: React.ReactNode }) {
	const api = new ApiService();
	async function getData() {
		const res = await api.get('https://www.stayuplate.icu/api/general/info');
		return await res.json();
	}
	const data: ApiData = await getData();
	const blogData: BlogData = data.data;
	return (
		<>
			<div className="md:flex grid grid-cols-1 gap-4">
				<div className="flex-1">
					{children}
				</div>
				<div className="md:w-72 w-full">
					<Sidebar blogData={blogData} />
				</div>
			</div>
		</>

	);
}
