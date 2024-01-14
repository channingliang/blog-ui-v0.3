'use client';

import React, { useEffect, useState } from "react";

interface SidebarProps {
    content: string;
}

interface Heading {
    level: number;
    text: string;
}

const extractHeadings = (content: string): Heading[] => {
    const regex = /(#){1,3}\s(.+)/g;
    let matches;
    let extractedHeadings: Heading[] = [];
    while ((matches = regex.exec(content)) !== null) {
        extractedHeadings.push({
            level: matches[1].length,
            text: matches[2],
        });
    }
    return extractedHeadings;
};

const Toc: React.FC<SidebarProps> = ({ content }) => {
    const [headings, setHeadings] = useState<Heading[]>([]);

    useEffect(() => {
        setHeadings(extractHeadings(content));
    }, [content]);

    return (
        <aside>
            <nav>
                <ul>
                    {headings.map((heading, index) => (
                        <li key={index} style={{ marginLeft: `${heading.level - 1}em` }}>
                            <a href={`#${heading.text}`}>{heading.text}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Toc;
