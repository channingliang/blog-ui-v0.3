'use client';

import {
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader,
    useDisclosure
} from "@nextui-org/react";
import React from "react";
import ScrollTopBtn from "@/components/post/scroll-top-btn";
import ScrollEndBtn from "@/components/post/scroll-end-btn";
import { Button } from "@nextui-org/button";
import Toc from "@/components/post/toc";
import { ListTree } from "lucide-react";

export default function GuideFixed({content}: { content: string }) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    return (
        <div className={"grid grid-cols-1 gap-2"}>
            <Modal
                isOpen={isOpen}
                backdrop={"blur"}
                placement={"bottom-center"}
                onOpenChange={onOpenChange}
                scrollBehavior={"inside"}
            >
                <ModalContent className={"max-h-[60vh] sm:max-h-[80vh]"}>
                    {(onClose) => (
                        <>
                            <ModalHeader>目录</ModalHeader>
                            <ModalBody>
                                <div className={"px-6 pb-6"}>
                                    <Toc content={content} action={onClose}/>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
            <Button
                className={"text-foreground"}
                isIconOnly
                aria-label="Go End"
                color={"primary"}
                variant={"ghost"}
                onPress={onOpen}
            >
                <ListTree />
            </Button>
            <ScrollTopBtn className={"text-foreground"} tooltip={"left"} variant={"ghost"}/>
            <ScrollEndBtn className={"text-foreground"} id={"postNav"} tooltip={"left"} variant={"ghost"}/>

        </div>
    );
}
