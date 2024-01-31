'use client';

import React, { useEffect, useRef } from 'react';

const HackedText = ({content} : {content: string}) => {
    const titleRef = useRef<HTMLDivElement>(null);
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    useEffect(() => {
        const titleElement = titleRef.current;

        if (!titleElement) return;

        let animationInterval: ReturnType<typeof setInterval>;
        let iteration = 0;

        const animateText = () => {
            clearInterval(animationInterval);

            animationInterval = setInterval(() => {
                titleElement.innerText = titleElement.innerText
                    .split("")
                    .map((_, index) => {
                        if (index < iteration) {
                            return titleElement.dataset.value![index];
                        }

                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("");

                if (iteration >= titleElement.dataset.value!.length) {
                    clearInterval(animationInterval);
                    iteration = 0; // Reset for next cycle
                }

                iteration += 1 / 3;
            }, 40);
        };

        const interval = setInterval(animateText, 4000);

        return () => {
            clearInterval(animationInterval);
            clearInterval(interval);
        };
    }, [letters]);

    return (
        <div
            className={"text-background text-[12vw] md:text-[6rem] lg:text-[8rem] leading-tight font-black select-none"}
            ref={titleRef}
            data-value={content}
        >
            {content}
        </div>
    );
};

export default HackedText;


