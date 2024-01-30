'use client';

import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import { formatTime } from "@/lib/utils";
import { MyIcon } from "@/components/my-icon";
import { LuCalendarCheck2, LuPenLine, LuPanelBottomClose, LuPanelBottomOpen, LuX, LuZoomIn, LuZoomOut } from "react-icons/lu";

// TODO: go https://yet-another-react-lightbox.com/examples/nextjs and check the example
interface ViewerProps {
    images: ImagePageView[];
    children?: React.ReactNode;
}

const Viewer = ({ images, renderImageGallery }: {
    images: ImagePageView[],
    renderImageGallery: (openLightbox: (index: number) => void) => React.ReactNode
}) => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const zoomRef = React.useRef(null);
    const showToggle = true;

    const openLightbox = (index: number) => {
        setLightboxOpen(true);
        setCurrentImageIndex(index);
    };

    const generateCaption = (image: ImagePageView) => {
        return (
            <div className={"flex flex-col gap-2"}>
                <div className={"flex flex-wrap gap-2 justify-between items-center"}>
                    <div className={"text-xl sm:text-2xl font-bold uppercase"}>
                        {image.title}
                    </div>
                    <div className={"flex flex-wrap items-center gap-2 sm:gap-4 text-sm text-white/60"}>
                        <p className={"flex items-center gap-1"}>
                            <MyIcon icon={LuCalendarCheck2}/>
                            {formatTime(image.createTime)}
                        </p>
                        {
                            image.editTime &&
                          <p className={"flex items-center gap-1"}>
                            <MyIcon icon={LuPenLine}/>
                              {formatTime(image.editTime)}
                          </p>
                        }
                    </div>
                </div>
                {
                    image.content &&
                    <div className={"flex text-clip"}>
                        {image.content}
                    </div>
                }
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
                captions={{showToggle}}
                zoom={{ref: zoomRef}}
                render={{
                    iconClose: () => <MyIcon icon={LuX} size={20}/>,
                    iconZoomIn: () => <MyIcon icon={LuZoomIn} size={20}/>,
                    iconZoomOut: () => <MyIcon icon={LuZoomOut} size={20}/>,
                    iconCaptionsHidden: () => <MyIcon icon={LuPanelBottomOpen} size={20}/>,
                    iconCaptionsVisible: () => <MyIcon icon={LuPanelBottomClose} size={20}/>,
                }}
            />
            {renderImageGallery(openLightbox)}
        </section>
    );
};

export default Viewer;
