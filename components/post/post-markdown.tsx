'use client';

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import "@/styles/github-markdown.css";

export default function PostMarkdown({ content }: { content: string }) {
    const { theme } = useTheme();
    const [mdClass, setMdClass] = useState(`markdown-body markdown-body-dark p-4`); // 设置默认类

    useEffect(() => {
        // 当主题改变时更新类名
        setMdClass(`markdown-body markdown-body-${theme} p-4`);
    }, [theme]); // 确保这个效果依赖于 `theme`

    return (
        <div className={mdClass}>
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                {content}
            </ReactMarkdown>
        </div>
    );
}