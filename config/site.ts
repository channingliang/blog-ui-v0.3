export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "LEONの熬夜空间",
    description: "我（Leon）记录生活的小地方",
    navItems: [
        {
            label: "主页",
            href: "/home",
        },
		{
			label: "博文",
			href: "/posts?page=1",
		},
        {
            label: "照片",
            href: "/images?page=1",
        },
        // {
        //     label: "留言板",
        //     href: "/forum",
        // },
        {
            label: "关于我",
            href: "/about",
        }
    ],
};
