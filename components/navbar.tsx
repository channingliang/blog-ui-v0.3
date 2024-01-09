"use client";

import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarBrand,
    NavbarItem,
    NavbarMenuItem,
} from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";
import { ThemeSwitch } from "@/components/theme-switch";
import React, { useState } from "react";
import { AccountBox, Search } from "@mui/icons-material";
import { base } from "next/dist/build/webpack/config/blocks/base";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const searchInput = (
        <Input
            variant={"bordered"}
            endContent={<Kbd className="hidden lg:inline-block" keys={["command"]}>S</Kbd>}
            labelPlacement="outside"
            placeholder="还不能搜索呢..."
            startContent={<Search />}
            type="search"
        />
    );

    return (
        <NextUINavbar
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            maxWidth="xl"
        >
            <NavbarContent className="sm:hidden basis-1" justify="center">
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
                <NavbarBrand as="li" className="gap-3 max-w-fit">
                    <NextLink className="flex justify-start items-center gap-1" href="/">
                        <p className="font-bold text-primary text-inherit">LEONの熬夜空间</p>
                    </NextLink>
                </NavbarBrand>
                <ul className="hidden sm:flex gap-4 justify-start ml-2">
                    {siteConfig.navItems.map((item) => (
                        <NavbarItem key={item.href}>
                            <NextLink
                                className={clsx(
                                    linkStyles({ color: "foreground" }),
                                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                                )}
                                color="foreground"
                                href={item.href}
                            >
                                {item.label}
                            </NextLink>
                        </NavbarItem>
                    ))}
                </ul>
            </NavbarContent>

            <NavbarContent
                className="basis-1/5 sm:basis-full"
                justify="end"
            >
                <NavbarItem className="flex align-middle">
                    <ThemeSwitch />
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
                <NavbarItem className="hidden sm:flex">
                    <Button variant="ghost">
                        登录
                    </Button>
                </NavbarItem>
                <NavbarItem className="sm:hidden">
                    <Button
                        isIconOnly
                        variant={"light"}
                        title={"切换主题"}
                        aria-label={"theme switch"}
                    >
                        <AccountBox />
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {searchInput}
                <div className="mx-4 mt-2 flex flex-col gap-2">
                    {siteConfig.navItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link href={item.href} size="lg">
                                {item.label}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </div>
            </NavbarMenu>
        </NextUINavbar>
    );
};
