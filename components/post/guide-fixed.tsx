import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import React from "react";
import ScrollTopBtn from "@/components/post/scroll-top-btn";
import ScrollEndBtn from "@/components/post/scroll-end-btn";
import { Button } from "@nextui-org/button";
import { Toc as TocIcon } from "@mui/icons-material";
import Toc from "@/components/post/toc";

export default function GuideFixed({content}: { content: string }) {
    return (
        <div className={"grid grid-cols-1 gap-2"}>
            <Popover placement="left-end" backdrop={"blur"} shouldBlockScroll>
                <PopoverTrigger>
                    <Button
                        className={"text-foreground"}
                        isIconOnly
                        aria-label="Go End"
                        color={"primary"}
                        variant={"ghost"}
                    >
                        <TocIcon />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className={"p-0 w-[250px] h-[500px] border"}>
                    <div className={"p-2 px-6 overflow-auto"}>
                        <Toc content={content} />
                    </div>

                </PopoverContent>
            </Popover>
            <ScrollTopBtn className={"text-foreground"} tooltip={"left"} variant={"ghost"}/>
            <ScrollEndBtn className={"text-foreground"} id={"postNav"} tooltip={"left"} variant={"ghost"}/>

        </div>
    );
}