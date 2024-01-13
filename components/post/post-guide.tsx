'use client';

import TitledDiv from "@/components/sidebar/titled-div";
import { EditCalendar, Restore, AdsClick } from "@mui/icons-material";
import InfoCard from "@/components/sidebar/info-card";
import { formatTime, formatTimeZH } from "@/lib/utils";
import { Chip } from "@nextui-org/react";

export default function SideGuide({post}: { post: PostData }) {
    return (
        <div className="hidden md:block md:w-72">
            <div className="grid grid-cols-1 gap-4">
                <TitledDiv title={"副标题"} className={"py-4"}>
                    <h2>{post.subtitle}</h2>
                </TitledDiv>
                <TitledDiv title={"博文信息"} className={"py-4"}>
                    <div className={"grid grid-cols-1 gap-2"}>
                        <InfoCard IconComponent={EditCalendar} mainText={"发布于 " + formatTimeZH(post.createTime)}/>
                        {post.editTime &&
                          <InfoCard IconComponent={Restore} mainText={"编辑于 " + formatTimeZH(post.editTime)}/>
                        }
                        <InfoCard IconComponent={AdsClick} mainText={"浏览量 " + post.viewCount}/>
                    </div>
                </TitledDiv>
                <TitledDiv title={"标签"} className={"py-4 flex flex-wrap gap-1"}>
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
            <div className={"sticky top-20 border mt-4 h-72"}>

            </div>

        </div>
    );
}