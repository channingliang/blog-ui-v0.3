'use client';

import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

interface TypedTextProps {
    strings: string[];
    startDelay?: number;
    typeSpeed?: number;
    backSpeed?: number;
    backDelay?: number;
    loop?: boolean;
}

const TypedText: React.FC<TypedTextProps> = ({strings,
                                                 startDelay = 300,
                                                 typeSpeed = 100,
                                                 backSpeed = 50,
                                                 backDelay = 1000,
                                                 loop = true }) => {
    const el = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const options = {
            strings,
            startDelay,
            typeSpeed,
            backSpeed,
            backDelay,
            loop,
        };

        const typed = new Typed(el.current!, options);

        return () => {
            typed.destroy();
        };
    }, [strings, typeSpeed, backSpeed, loop]);

    return <span ref={el} />;
};

export default TypedText;
