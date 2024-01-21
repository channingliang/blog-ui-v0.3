'use client';

import React from 'react';
import {
    Card,
    CardFooter,
    Image,
} from "@nextui-org/react";

export default function ImageCard({ image, onClick }: { image: ImageData, onClick?: () => void }) {
    return (
        <>
            <Card
                isPressable
                key={image.imageId}
                className="border-2 mb-4 max-h-[250px]"
                shadow={"sm"}
                onPress={() => {
                    onClick && onClick();
                }}
            >
                <Image
                    isZoomed
                    width={1024}
                    height={768}
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src={image.url}
                    // fallbackSrc="/assets/fallback.jpg"
                />
                <CardFooter
                    className="absolute bg-white/10 dark:bg-black/70 bottom-0 z-10
                 border-t-1 border-white/30 dark:border-default-100 p-2 px-4"
                >
                    <div className="flex flex-grow gap-2 items-center">
                        <div className="flex uppercase text-small text-clip text-white">
                            {image.title}
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </>

    );
}
