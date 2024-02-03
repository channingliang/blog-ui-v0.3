"use client";

import React from 'react';
import { Card, CardHeader, CardFooter, Link as ULInk, Image } from "@nextui-org/react";
import { formatTime } from "@/lib/utils";
import { LuCalendarDays, LuMousePointerClick } from "react-icons/lu";
import { MyIcon } from "@/components/my-icon";
import { ApiService } from "@/lib/apiService";
import Link from "next/link";

export default function PostCards({ posts }: { posts: PostPageView[] }) {
    const api = new ApiService();
    function addViewCount(id: number) {
        api.post('posts/views/' + id, {
            cache: "no-cache",
        }).then();
    }
    return (
        <>
            {
                posts.map((post: PostPageView) => (
                    <Link key={post.postId} href={"/post/" + post.postId} onClick={() => addViewCount(post.postId)}>
                        <Card
                            className="post-card h-[160px] sm:h-[250px] border-2"
                            shadow={"sm"}
                        >
                            <CardHeader className="absolute z-10 top-1 flex-col items-start">
                                <p className="text-tiny text-white/60 font-bold text-glow-white">LEON</p>
                                <h4 className="text-white/90 font-bold text-xl text-glow-black">{post.title}</h4>
                            </CardHeader>
                            <Image
                                alt="Post cover"
                                className="z-0 w-full h-full object-cover rounded-none"
                                src={post.coverUrl ? post.coverUrl : "https://pic.stayuplate.icu/ui/default-bg.jpg"}
                            />
                            {/*<div className="absolute inset-0 bg-black/30"></div>*/}
                            <CardFooter
                                className="absolute bg-white/10 dark:bg-black/70 bottom-0 z-10
                 border-t-1 border-white/30 dark:border-default-100"
                            >
                                <div className="flex flex-wrap gap-4 items-center text-tiny text-white/60">
                                    <MyIcon icon={LuCalendarDays} className={"-mr-2"}/>
                                    <span>{formatTime(post.createTime)}</span>
                                    <MyIcon icon={LuMousePointerClick} className={"-mr-2"}/>
                                    <span>{post.viewCount}</span>
                                </div>
                            </CardFooter>
                        </Card>
                    </Link>
                ))
            }
        </>
    );
}
