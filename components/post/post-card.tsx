'use client';

import React from 'react';
import Image from "next/image";
import { Card, CardHeader, CardFooter } from "@nextui-org/react";
import { AccessTime, AdsClick } from "@mui/icons-material";
import defaultBg from "@/public/assets/default-bg.jpg";
import { formatTime } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function PostCard({ post }: { post: PostsData }) {
    const router = useRouter();

    function handlePress() {
        router.push('/post/' + post.postId);
    }

    return (
        <Card
            isPressable
            key={post.postId}
            className="h-[160px] sm:h-[250px] border-2"
            shadow={"sm"}
            onPress={handlePress}
        >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny text-white/60 font-bold">LEON</p>
                <h4 className="text-white/90 font-bold text-xl">{post.title}</h4>
            </CardHeader>
            <Image
                className="z-0 w-full h-full object-cover"
                src={post.coverUrl ? post.coverUrl : defaultBg}
                alt="Post cover"
                sizes={"100%"}
                fill
                priority
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <CardFooter
                className="absolute bg-black/70 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100"
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
