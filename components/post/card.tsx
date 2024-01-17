// 'use client';

import React from 'react';
import Image from "next/image";
import { Card, CardHeader, CardFooter, Link } from "@nextui-org/react";
import { AccessTime, AdsClick } from "@mui/icons-material";
import cover from "@/public/assets/default-bg.jpg";
import { formatTime } from "@/lib/utils";
import { useRouter } from "next/navigation";
import NextLink from "next/link";

export default function PostCard({ post }: { post: PostsData }) {

    return (
        <Card
            key={post.postId}
            className="post-card h-[160px] sm:h-[250px] border-2"
            shadow={"sm"}
            as={Link}
            href={"/post/" + post.postId}
        >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny text-white/60 font-bold text-glow-white">LEON</p>
                <h4 className="text-white/90 font-bold text-xl text-glow-black">{post.title}</h4>
            </CardHeader>
            <Image
                className="z-0 w-full h-full object-cover"
                src={post.coverUrl ? post.coverUrl : cover}
                alt="Post cover"
                priority
                sizes={"100%"}
                fill
            />
            {/*<div className="absolute inset-0 bg-black/30"></div>*/}
            <CardFooter
                className="absolute bg-white/10 dark:bg-black/70 bottom-0 z-10
                 border-t-1 border-white/30 dark:border-default-100"
            >
                <div className="flex flex-grow gap-2 items-center">
                    <div className="flex gap-2">
                        <div className="text-tiny text-white/60 flex items-center">
                            <AccessTime sx={{fontSize: 16}} className={"mr-1"}/>
                            {formatTime(post.createTime)}
                        </div>
                        <div className="text-tiny text-white/60 flex items-center">
                            <AdsClick sx={{fontSize: 16}} className={"mr-1"}/>
                            {post.viewCount}
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>

    );
}
