import { Avatar, Link } from "@nextui-org/react";
import TypedText from "@/components/typed-text";
import TitledDiv from "@/components/sidebar/titled-div";
import Runtime from "@/components/sidebar/run-time";
import React, { Suspense } from "react";
import InfoCard from "@/components/sidebar/info-card";
import { Article, Bookmark, Comment, Favorite, Photo } from "@mui/icons-material";
import { ApiService } from "@/lib/apiService";

// interface BlogData {
//     articleCount: number;
//     photoCount: number;
//     tagCount: number;
//     journalCount: number;
//     commentCount: number;
// }
// interface ApiData {
//     code: string;
//     msg: string;
//     data: BlogData;
// }
//
// const api = new ApiService();
//
// async function getData() {
//     try {
//         const res = await api.get('https://www.stayuplate.icu/api/general/info');
//         console.log(res)
//         if (res.ok) {
//             const data = await res.json();
//             return data;
//             // 处理数据
//         } else {
//             console.error('Network response was not ok.');
//         }
//     } catch (error) {
//         console.error('There has been a problem with your fetch operation:', error);
//     }
// }

export default async function SideBar() {
    // const data: ApiData = await getData();
    // const blogData: BlogData = data.data;
    return (
        <>
            <div className="grid grid-cols-1 gap-4 p-2">
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
                    <div className="sidebar-box w-full md:w-auto">
                        <TypedText
                            strings={["Hi~我是Leon", "精神状态良好", "坚持早睡早起", "绝对不会熬夜"]}/>
                    </div>
                </div>
                <div className="h-12 flex items-center">
                    <TitledDiv title={"已熬夜"}>
                        <Runtime className={"text-sm md:w-auto w-full"}/>
                    </TitledDiv>
                </div>
                <div className="h-12 flex items-center w-full md:w-auto">
                    <TitledDiv title={"近期状态"}>
                        <div>学习中</div>
                    </TitledDiv>
                    <div className={"sidebar-box ml-4"}>
                        <p className={"text-xl"}>📚</p>
                    </div>
                </div>
            </div>
            {/*<div className="md:sticky md:top-12 grid grid-cols-1 gap-4 p-2">*/}
            {/*    <TitledDiv title={"本站数据"}*/}
            {/*               className={"sticky top-0 flex flex-wrap md:grid md:grid-cols-2 gap-4 py-4 w-full"}>*/}
            {/*        <InfoCard*/}
            {/*            IconComponent={Article}*/}
            {/*            mainText={"记录 " + blogData.articleCount + " 篇"}*/}
            {/*            secondaryText="博文"/>*/}
            {/*        <InfoCard*/}
            {/*            IconComponent={Photo}*/}
            {/*            mainText={"上传 " + blogData.photoCount + " 张"}*/}
            {/*            secondaryText="照片"/>*/}
            {/*        <InfoCard*/}
            {/*            IconComponent={Favorite}*/}
            {/*            mainText={"发布 " + blogData.journalCount + " 次"}*/}
            {/*            secondaryText="动态"/>*/}
            {/*        <InfoCard*/}
            {/*            IconComponent={Bookmark}*/}
            {/*            mainText={"添加 " + blogData.tagCount + " 个"}*/}
            {/*            secondaryText="标签"/>*/}
            {/*        <InfoCard*/}
            {/*            IconComponent={Comment}*/}
            {/*            mainText={"收集 " + blogData.commentCount + " 条"}*/}
            {/*            secondaryText="评论"/>*/}
            {/*    </TitledDiv>*/}
            {/*    <TitledDiv title={"近期更新"}*/}
            {/*               className={"h-[400px] flex flex-wrap md:grid md:grid-cols-1 gap-4 py-4 w-full"}>*/}
            {/*    </TitledDiv>*/}
            {/*</div>*/}

        </>
    )
}