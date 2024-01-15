import TitledDiv from "@/components/sidebar/titled-div";
import { EditCalendar, Restore, AdsClick } from "@mui/icons-material";
import InfoCard from "@/components/sidebar/info-card";
import { formatTime, formatTimeZH } from "@/lib/utils";
import { Chip } from "@nextui-org/react";
import Toc from "@/components/post/toc";
import React from "react";
import ScrollTopBtn from "@/components/post/scroll-top-btn";
import ScrollEndBtn from "@/components/post/scroll-end-btn";

export default function GuideSide({post}: { post: PostData }) {
    return (
        <>
            <div className="lg:w-72 w-full">
                <div className="grid grid-cols-1 gap-4">
                    <TitledDiv title={"副标题"} className={"p-4"}>
                        <h2>{post.subtitle}</h2>
                    </TitledDiv>
                    <TitledDiv title={"博文信息"} className={"p-4"}>
                        <div className={"grid grid-cols-1 gap-2"}>
                            <InfoCard IconComponent={EditCalendar}
                                      mainText={"发布于 " + formatTimeZH(post.createTime)}/>
                            {post.editTime &&
                              <InfoCard IconComponent={Restore} mainText={"编辑于 " + formatTimeZH(post.editTime)}/>
                            }
                            <InfoCard IconComponent={AdsClick} mainText={"浏览量 " + post.viewCount}/>
                        </div>
                    </TitledDiv>
                    <TitledDiv title={"标签"} className={"p-4 flex flex-wrap gap-1"}>
                        {post.tags && post.tags.length > 0 ? (
                            post.tags.map((tag, index) => (
                                <Chip
                                    className={"rounded-xl text-[.8rem]"}
                                    key={index}
                                    color="primary"
                                    variant="dot"
                                >
                                    {tag.name}
                                </Chip>
                            ))
                        ) : (
                            <p className={"text-small text-white/50"}>-未添加标签-</p>
                        )}
                    </TitledDiv>
                </div>
            </div>
            <div className="sticky top-16 grid grid-cols-1 gap-4 pt-4">
                <TitledDiv title={"目录"} className={"p-4 pl-6 overflow-auto max-h-[70vh] w-full"}>
                    <Toc content={post.content}/>
                </TitledDiv>
                <TitledDiv title={"工具"} className={"py-4 max-h-[10vh] w-full flex justify-center gap-4"}>
                    <ScrollTopBtn className={"text-foreground"} variant={"ghost"} tooltip={"bottom-start"} />
                    <ScrollEndBtn id={"postNav"} className={"text-foreground"} variant={"ghost"} tooltip={"bottom-end"} />
                </TitledDiv>
            </div>
        </>

    );
}