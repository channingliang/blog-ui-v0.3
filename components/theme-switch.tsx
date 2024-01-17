import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import { MoonStar, Sun } from "lucide-react";

export function ThemeSwitch() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	// 更新favicon
	useEffect(() => {
		if (mounted) {
			const iconLink = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
			if (iconLink) {
				iconLink.href = theme === "dark" ? "/icon-dark.ico" : "/icon-light.ico";
			}
		}
	}, [theme, mounted]);

	if (!mounted) return null;

	return (
		<div>
			<Button
				isIconOnly
				variant={"light"}
				title={"切换主题"}
				onClick={() => {
					setTheme(theme === "dark" ? "light" : "dark");
				}}
			>
				{theme === "light" ? <Sun /> : <MoonStar />}
			</Button>
		</div>
	);
};
