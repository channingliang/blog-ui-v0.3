import { Accordion, Avatar, Link } from "@nextui-org/react";
import { AccordionItem } from "@nextui-org/accordion";
import TypedText from "@/components/typed-text";
import TitledDiv from "@/components/sidebar/titled-div";
import Runtime from "@/components/sidebar/run-time";
import React from "react";
import InfoCard from "@/components/sidebar/info-card";
import { LuActivity, LuImage, LuLibrary, LuTag, LuMessageSquare } from "react-icons/lu";
import RecentContent from "@/components/sidebar/recent-content";

export default function SideBar({ statistics, recent }: { statistics: ContentStat, recent: RecentContent }) {
    return (
        <>
            <div className="grid grid-cols-1 gap-4">
                <div className="h-12 flex items-center">
                    <Avatar
                        className={"ml-1 mr-5"}
                        isBordered
                        isFocusable
                        as={Link}
                        radius={"sm"}
                        color={"primary"}
                        src="/assets/avatar.jpg"
                        href="/about"/>
                    <div className="title-box p-4 w-full md:w-auto">
                        <TypedText
                            strings={["Hi~我是Leon", "精神状态良好", "坚持早睡早起", "绝对不会熬夜"]}
                        />
                    </div>
                </div>
                <div className="h-12 flex items-center">
                    <TitledDiv title={"已熬夜"} className={"p-4"}>
                        <Runtime className={"text-sm md:w-auto w-full mr-2"}/>
                    </TitledDiv>
                </div>
                <div className="h-12 flex items-center w-full md:w-auto">
                    <TitledDiv title={"状态"} className={"p-4"}>
                        <div>学习中</div>
                    </TitledDiv>
                    <div className={"title-box ml-4 p-4"}>
                        <p className={"text-xl"}>📚</p>
                    </div>
                </div>
            </div>
            <div className="md:sticky md:top-16 grid grid-cols-1 gap-4 pt-4">
                <TitledDiv
                    title={"本站数据"}
                    className={"sticky top-0 flex flex-wrap justify-start md:grid md:grid-cols-2 gap-4 p-4 w-full"}>
                    <InfoCard
                        icon={LuLibrary}
                        mainText={"记录 " + statistics.postCount + " 篇"}
                        greyText="博文"/>
                    <InfoCard
                        icon={LuImage}
                        mainText={"上传 " + statistics.imageCount + " 张"}
                        greyText="照片"/>
                    <InfoCard
                        icon={LuActivity}
                        mainText={"发布 " + statistics.momentCount + " 次"}
                        greyText="动态"/>
                    <InfoCard
                        icon={LuTag}
                        mainText={"添加 " + statistics.tagCount + " 个"}
                        greyText="标签"/>
                    <InfoCard
                        icon={LuMessageSquare}
                        // mainText={"收集 " + blogData.commentCount + " 条"}
                        mainText={"暂未开放"}
                        greyText="评论"/>
                </TitledDiv>
                <TitledDiv
                    title={"近期活动"}
                    className={"p-2 w-full"}>
                    <RecentContent recent={recent} />
                </TitledDiv>
            </div>
        </>
    )
}
