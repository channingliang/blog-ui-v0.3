import React from "react";
import { ApiService } from "@/lib/apiService";
import Sidebar from "@/components/sidebar/side-bar";

export default async function RootLayout({children}: { children: React.ReactNode }) {
	const api = new ApiService();
	async function getContentStat() {
		const res = await api.get('http://localhost:10321/stat/content', { cache: "no-store" });
		return await res.json();
	}
	async function getRecent() {
		const res = await api.get('http://localhost:10321/recent/pi', { cache: "no-store" });
		return await res.json();
	}
	const [statData, recentData]: [ApiData, ApiData] = await Promise.all([
		getContentStat(),
		getRecent()
	]);
	const stat: ContentStat = statData.data;
	const recent: RecentContent = recentData.data;

	return (
		<>
			<div className="md:flex grid grid-cols-1 gap-4">
				<div className="flex-1">
					{children}
				</div>
				<div className="md:w-72 w-full">
					<Sidebar statistics={stat} recent={recent} />
				</div>
			</div>
		</>

	);
}
