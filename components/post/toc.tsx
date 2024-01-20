'use client';

import React from "react";
import { Link } from "@nextui-org/react";

interface Heading {
    level: number;
    text: string;
    id: string;
    sub?: Heading[];
}

const extractHeadings = (content: string): Heading[] => {
    const regex = /^(\#{2,4})\s+(.+)$/gm;
    let matches;
    let headings: Heading[] = [];
    let h2Counter = 0, h3Counter = 0, h4Counter = 0;
    let skipped = false;

    while ((matches = regex.exec(content)) !== null) {
        const level = matches[1].length;
        const text = matches[2].trim();
        let id = '';

        if (level === 2) {
            h2Counter++;
            h3Counter = 0;
            h4Counter = 0;
            id = `heading-${h2Counter}`;
        } else if (level === 3) {
            h3Counter++;
            h4Counter = 0;
            id = `heading-${h2Counter}-${h3Counter}`;
        } else if (level === 4) {
            h4Counter++;
            id = `heading-${h2Counter}-${h3Counter}-${h4Counter}`;
        }

        const newHeading: Heading = { level, text, id };

        if (level === 2) {
            headings.push(newHeading);
        } else if (level === 3) {
            const lastH2 = headings[headings.length - 1];
            if (!lastH2.sub) {
                lastH2.sub = [];
            }
            lastH2.sub.push(newHeading);
            skipped = false;
        } else if (level === 4) {
            const lastH2 = headings[headings.length - 1];
            if (!lastH2.sub) {
                skipped = true;
                lastH2.sub = [];
                lastH2.sub.push(newHeading);
            } else if (skipped) {
                lastH2.sub.push(newHeading);
            } else {
                const lastH3 = lastH2.sub[lastH2.sub.length - 1];
                if (!lastH3.sub) {
                    lastH3.sub = [];
                }
                lastH3.sub.push(newHeading);
            }

        }
    }

    return headings;
};

const scrollToHeading = (id: string, action?: () => void) => {
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

        if (action) action();
    }
};

const Toc = ({ content, action }: { content: string, action?: () => void }) => {
    const headings = extractHeadings(content);

    if (headings.length === 0) return <p className={"text-small text-white/50"}>-无目录结构-</p>;

    const handleLinkClick = (e: React.MouseEvent, headingText: string) => {
        e.preventDefault();
        scrollToHeading(headingText);
        if (action) action();
    };

    const renderListItems = (headings: Heading[]) => {
        return headings.map((heading, index) => (
            <li key={'h4' + index} className={"my-2"}>
                <Link
                    href={"#"}
                    className={"text-large font-bold hover:text-primary"}
                    color={"foreground"}
                    underline="hover"
                    onClick={(e) => handleLinkClick(e, heading.id)}
                >
                    {heading.text}
                </Link>
                {heading.sub && heading.sub.length > 0 && (
                    <ol className={"list-disc list-inside ml-1 border-l-1"}>
                        {heading.sub.map((subHeading, subIndex) => (
                            <li key={'h4' + subIndex} className={"text-small ml-6 my-2"}>
                                <Link
                                    href={`#`}
                                    color={"foreground"}
                                    underline="hover"
                                    onClick={
                                        (e) => handleLinkClick(e, subHeading.id)
                                    }
                                >
                                    {subHeading.text}
                                </Link>
                                {subHeading.sub && subHeading.sub.length > 0 && (
                                    <ol className={"ml-1 border-l"}>
                                        {subHeading.sub.map((subSubHeading, subSubIndex) => (
                                            <li key={'h4' + subSubIndex} className={"text-small ml-6 my-2"}>
                                                <Link
                                                    href={`#`}
                                                    color={"foreground"}
                                                    underline="hover"
                                                    onClick={
                                                        (e) =>
                                                            handleLinkClick(e, subSubHeading.id)
                                                    }
                                                >
                                                    {subSubHeading.text}
                                                </Link>
                                            </li>
                                        ))}
                                    </ol>
                                )}
                            </li>
                        ))}
                    </ol>
                )}
            </li>
        ));
    };

    return (
        <nav>
            <ol className={"text-primary list-decimal list-inside"}>{renderListItems(headings)}</ol>
        </nav>
    );
};

export default Toc;
