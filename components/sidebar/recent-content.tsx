'use client';

import React, { Key } from "react";
import { Accordion, Image, Listbox, ListboxItem, ListboxSection } from "@nextui-org/react";
import { AccordionItem } from "@nextui-org/accordion";
import { motion } from 'framer-motion';
import { MyIcon } from "@/components/my-icon";
import { LuBaby } from "react-icons/lu";
import { formatTime } from "@/lib/utils";


export default function RecentContent({ recent }: { recent: RecentContent }) {
    const [selectedKeys, setSelectedKeys] =
        React.useState(new Set(["added"]));

    const handleSelectionChange = (newSelectedKeys: any) => {
        if (newSelectedKeys.size === 0) return;
        setSelectedKeys(newSelectedKeys);
    };

    const isEditedExpanded = selectedKeys.has("edited");

    return (
        <Accordion
            selectedKeys={selectedKeys}
            onSelectionChange={handleSelectionChange}
            isCompact
        >
            <AccordionItem
                key="added"
                aria-label={"最新发布"}
                title={(
                    <p className={"text-sm font-black"}>最新发布</p>
                )}
            >
                <Listbox className={"-mt-2"} aria-label="最新发布博文与图片">
                    {
                        recent.addedPost &&
                      <ListboxSection title="博文" showDivider>
                        <ListboxItem
                          key={recent.addedPost.postId}
                          aria-label={"最新发布博文"}
                          description={"发布于 " + formatTime(recent.addedPost.createTime)}
                          href={"/post/" + recent.addedPost.postId}
                        >
                          <div className={"overflow-hidden truncate w-52 mb-1"}>{recent.addedPost.title}</div>
                        </ListboxItem>
                      </ListboxSection>
                    }
                    {
                        recent.addedImages &&
                      <ListboxSection title="图片">
                            {
                                recent.addedImages.map((image) => (
                                    <ListboxItem
                                        key={image.imageId}
                                        aria-label={"最新发布图片"}
                                        description={"发布于 " + formatTime(image.createTime)}
                                        startContent={<MyIcon icon={LuBaby}/>}
                                    >
                                        <div className={"overflow-hidden truncate w-44 mb-1"}>{image.title}</div>
                                    </ListboxItem>
                                ))
                            }
                      </ListboxSection>
                    }
                </Listbox>
            </AccordionItem>
            <AccordionItem
                key="edited"
                aria-label={"最近更新"}
                title={(
                    <p className={"text-sm font-black"}>最近更新</p>
                )}
                subtitle={(
                    <div className="flex items-center -mb-1">
                        <span className={""}>-</span>
                        <motion.div
                            initial={{width: "auto", opacity: 1}}
                            animate={isEditedExpanded ? {width: 0, opacity: 0} : {width: "auto", opacity: 1}}
                            transition={{duration: 0.5}}
                            className="overflow-hidden"
                        >
                            <p className="text-tiny whitespace-nowrap">展开查看详情</p>
                        </motion.div>
                        <span className={""}>-</span>
                    </div>
                )}
            >
                <Listbox className={"-mt-2"} aria-label="博文与图片">
                    {
                        recent.editedPost &&
                      <ListboxSection title="博文" showDivider>
                        <ListboxItem
                          key={recent.editedPost.postId}
                          aria-label={"最近更新博文"}
                          description={"更新于 " + formatTime(recent.editedPost.createTime)}
                          href={"/post/" + recent.editedPost.postId}
                        >
                          <div className={"overflow-hidden truncate w-52 mb-1"}>{recent.editedPost.title}</div>
                        </ListboxItem>
                      </ListboxSection>
                    }
                    {
                        recent.editedImages && <ListboxSection title="图片">
                            {
                                recent.editedImages.map((image) => (
                                    <ListboxItem
                                        key={image.imageId}
                                        aria-label={"最近更新图片"}
                                        description={"更新于 " + formatTime(image.createTime)}
                                        startContent={(
                                            <Image
                                                src={image.url}
                                                alt={image.title}
                                                className={"rounded-none object-cover"}
                                            />
                                        )}
                                    >
                                        <div className={"overflow-hidden truncate w-44 mb-1"}>{image.title}</div>
                                    </ListboxItem>
                                ))
                            }
                      </ListboxSection>
                    }
                </Listbox>
            </AccordionItem>
        </Accordion>
    )
}
