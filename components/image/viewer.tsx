'use client';

import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import ImageCard from "@/components/image/card";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import { formatTime } from "@/lib/utils";
import { CalendarCheck2, FilePenLine, PanelBottomClose, PanelBottomOpen, X, ZoomIn, ZoomOut } from "lucide-react";
import { Tooltip } from "@nextui-org/react";

const Viewer = ({images}: { images: ImageData[] }) => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const zoomRef = React.useRef(null);
    const showToggle = true;

    const generateCaption = (image: ImageData) => {
        return (
            <div className={"flex flex-col gap-2"}>
                <div className={"flex flex-row gap-2 justify-between items-center"}>
                    <div className={"text-xl sm:text-2xl font-bold uppercase"}>
                        {image.title}
                    </div>

                    <div className={"text-sm text-white/60 inline-flex items-center"}>
                        <CalendarCheck2 className={"mr-1"} size={"1rem"}/>
                        <span>{formatTime(image.createTime)}</span>
                        {
                            image.editTime &&
                          <Tooltip content={"更新于 " + formatTime(image.editTime)}>
                            <FilePenLine className={"ml-2 text-primary"} size={"1rem"}/>
                          </Tooltip>
                        }

                    </div>
                </div>

                <div className={"flex text-clip"}>
                    {image.content}
                </div>
            </div>
        );
    }

    const lightboxImages = images.map((image) => ({
        src: image.url,
        description: generateCaption(image),
    }));

    return (
        <section>
            <Lightbox
                index={currentImageIndex}
                slides={lightboxImages}
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                plugins={[Zoom, Captions]}
                captions={{ showToggle }}
                zoom={{ ref: zoomRef }}
                render={{
                    iconClose: () => <X />,
                    iconZoomIn: () => <ZoomIn />,
                    iconZoomOut: () => <ZoomOut />,
                    iconCaptionsHidden: () => <PanelBottomOpen />,
                    iconCaptionsVisible: () => <PanelBottomClose />,
                }}
            />
            <div className={"w-full gap-4 columns-1 sm:columns-2 md:columns-3 lg:columns-4 "}>
                {
                    images.map((image, index) => (
                        <ImageCard key={image.imageId} image={image} onClick={() => {
                            setLightboxOpen(true);
                            setCurrentImageIndex(index);}}
                        />
                    ))
                }
            </div>
        </section>
    );
};

export default Viewer;
