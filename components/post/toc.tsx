'use client';

import React from "react";

interface Heading {
    level: number;
    text: string;
    subHeadings?: Heading[];
}

const extractHeadings = (content: string): Heading[] => {
    const regex = /^(#{2,3})\s(.+)$/gm;
    let matches;
    let headings: Heading[] = [];
    let lastLevel2Heading: Heading | null = null;

    while ((matches = regex.exec(content)) !== null) {
        const level = matches[1].length;
        const text = matches[2].trim();
        const newHeading: Heading = { level, text };

        if (level === 2) {
            lastLevel2Heading = newHeading;
            headings.push(newHeading);
        } else if (level === 3 && lastLevel2Heading) {
            if (!lastLevel2Heading.subHeadings) {
                lastLevel2Heading.subHeadings = [];
            }
            lastLevel2Heading.subHeadings.push(newHeading);
        }
    }

    return headings;
};

const scrollToHeading = (id: string) => {
    const headingElement = document.getElementById(id);
    if (headingElement) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = headingElement.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
};

const renderListItems = (headings: Heading[]) => {
    return headings.map((heading, index) => (
        <li key={index} className={"my-2"}>
            <a href={`#${heading.text}`} onClick={(e) => {e.preventDefault(); scrollToHeading(heading.text);}} className={"text-large hover:text-primary"}>
                {heading.text}
            </a>
            {heading.subHeadings && heading.subHeadings.length > 0 && (
                <ul className={"ml-2 mt-2 border-l-2 border-zinc-700"}>
                    {heading.subHeadings.map((subHeading, subIndex) => (
                        <li key={subIndex} className={"text-small ml-6 my-2 hover:text-primary"}>
                            <a href={`#${subHeading.text}`} onClick={(e) => {e.preventDefault(); scrollToHeading(subHeading.text);}}>
                                {subHeading.text}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    ));
};

const Toc = ({ content }: { content: string }) => {
    const headings = extractHeadings(content);

    return headings.length === 0
        ? <p className={"text-small text-white/50"}>-无目录结构-</p>
        : (
            <nav className={"toc pl-6"}>
                <ol>{renderListItems(headings)}</ol>
            </nav>
        );
};

export default Toc;