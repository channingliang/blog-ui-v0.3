'use client';

import React from 'react';
import {
    Card,
    CardFooter,
    Button,
    Image,
    Modal,
    useDisclosure,
    ModalContent,
    ModalHeader,
    ModalBody, ModalFooter
} from "@nextui-org/react";
import Sidebar from "@/components/sidebar/side-bar";

export default function ImageCard({ image }: { image: ImagesData }) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    return (
        <>
            <Card
                isPressable
                key={image.imageId}
                className="border-2 mb-4 max-h-[250px]"
                shadow={"sm"}
                onPress={() => {
                    onOpen();
                }}
            >
                <Image
                    isZoomed
                    width={1024}
                    height={768}
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src={image.url}
                    fallbackSrc="/assets/fallback-origin-cut.jpg"
                />
                <CardFooter
                    className="absolute bg-white/10 dark:bg-black/70 bottom-0 z-10
                 border-t-1 border-white/30 dark:border-default-100 p-2 px-4"
                >
                    <div className="flex flex-grow gap-2 items-center">
                        <div className="flex uppercase text-small text-clip">
                            {image.title}
                        </div>
                    </div>
                </CardFooter>
            </Card>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                scrollBehavior={"outside"}
                backdrop={"blur"}
                size={"5xl"}

            >
                <ModalContent className={""}>
                    {(onClose) => (
                        <>
                            <ModalHeader className={""}>
                                <div className="flex flex-row justify-between items-center">
                                    <div className="flex uppercase text-small text-clip">
                                        {image.title}
                                    </div>
                                </div>
                            </ModalHeader>
                            <ModalBody className={""}>
                                <div className="md:flex grid grid-cols-1 gap-4">
                                    <div className="w-full md:w-[70%]">
                                        <Image
                                            width={1024}
                                            height={768}
                                            alt="Card background"
                                            className=""
                                            src={image.url}
                                            fallbackSrc="/assets/fallback-origin-cut.jpg"
                                        />
                                    </div>
                                    <div className="pt-4 flex-1 flex-row text-ellipsis overflow-hidden">
                                        <div>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                                        <p className={"border"}>bvb</p>
                                    </div>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>

    );
}
