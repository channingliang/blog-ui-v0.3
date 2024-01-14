'use client';

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeReact from 'rehype-react';
import "@/styles/github-markdown.css";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import Toc from "@/components/post/toc";

export default function PostMarkdown({ content }: { content: string }) {

    content = '## 目录\n' + content;
    return (
        <div className={"markdown-body markdown-custom p-8 border-2 rounded-xl"}>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[
                    rehypeReact,
                    rehypeSlug,
                    rehypeAutolinkHeadings,
                ]}
                components={{
                    a(props) {
                        const {node, ...rest} = props;
                        return <a target={"_blank"} {...rest} />
                    },
                    code(props) {
                        const {children, className, node, ...rest} = props
                        const match = /language-(\w+)/.exec(className || '')
                        return match ? (
                            // @ts-ignore
                            <SyntaxHighlighter
                                {...rest}
                                PreTag="div"
                                language={match[1]}
                                style={atomDark}
                            >
                                {String(children).replace(/\n$/, '')}
                            </SyntaxHighlighter>
                        ) : (
                            <code {...rest} className={className}>
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