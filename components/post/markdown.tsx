// 'use client';

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeReact from 'rehype-react';
import "@/styles/github-markdown.css";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { visit } from "unist-util-visit";
import { Snippet } from "@nextui-org/react";

function customSlug() {
    return (tree: any) => {
        let h2Counter = 0; // 用于跟踪 h2 标题的计数器
        let h3Counter = 0; // 用于跟踪当前 h2 标题下的 h3 计数器
        let h4Counter = 0; // 用于跟踪当前 h3 标题下的 h4 计数器

        visit(tree, 'element', (node) => {
            if (node.tagName === 'h2') {
                h2Counter++;
                h3Counter = 0; // 重置 h3 计数器
                h4Counter = 0; // 重置 h4 计数器
                node.properties.id = `heading-${h2Counter}`;
            }

            if (node.tagName === 'h3') {
                h3Counter++;
                h4Counter = 0; // 重置 h4 计数器
                node.properties.id = `heading-${h2Counter}-${h3Counter}`;
            }

            if (node.tagName === 'h4') {
                h4Counter++;
                node.properties.id = `heading-${h2Counter}-${h3Counter}-${h4Counter}`;
            }
        });
    };
}

export default function Markdown({ content }: { content: string }) {
    return (
        <div className={"markdown-body markdown-custom py-6 px-4 md:px-6 lg:p-8 border-2 rounded-xl"}>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[
                    rehypeReact,
                    customSlug,
                    // rehypeSlug,
                    // rehypeAutolinkHeadings,
                ]}
                components={{
                    a(props) {
                        const {node, ...rest} = props;
                        return <a target={"_blank"} {...rest} />
                    },
                    code(props) {
                        const {children, className, node} = props
                        const match = /language-(\w+)/.exec(className || '')
                        return match ? (
                            <SyntaxHighlighter
                                PreTag="div"
                                language={match[1]}
                                style={atomDark}
                                customStyle={{
                                    margin: 0,
                                }}
                            >
                                {String(children).replace(/\n$/, '')}
                            </SyntaxHighlighter>

                        ) : (
                            <code className={"h-auto"}>
                                {children}
                            </code>
                        )
                    }
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}