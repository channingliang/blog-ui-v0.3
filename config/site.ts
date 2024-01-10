export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "LEONの熬夜空间",
    description: "我（Leon）记录生活的小地方",
    navItems: [
        {
            label: "主页",
            href: "/",
        },
		{
			label: "博文",
			href: "/post",
		},
        {
            label: "照片",
            href: "/photos",
        },
        {
            label: "留言板",
            href: "/forum",
        },

        {
            label: "关于我",
            href: "/about",
        }
    ],
    navMenuItems: [
        {
            label: "Profile",
            href: "/profile",
        },
        {
            label: "Dashboard",
            href: "/dashboard",
        },
        {
            label: "Projects",
            href: "/projects",
        },
        {
            label: "Team",
            href: "/team",
        },
        {
            label: "Calendar",
            href: "/calendar",
        },
        {
            label: "Settings",
            href: "/settings",
        },
        {
            label: "Help & Feedback",
            href: "/help-feedback",
        },
        {
            label: "Logout",
            href: "/logout",
        },
    ],
    links: {
        github: "https://github.com/nextui-org/nextui",
        twitter: "https://twitter.com/getnextui",
        docs: "https://nextui.org",
        discord: "https://discord.gg/9b6yyZKmH4",
        sponsor: "https://patreon.com/jrgarciadev"
    },
};
