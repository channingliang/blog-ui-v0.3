'use client';

import { Button } from "@nextui-org/button";
import React from "react";
import { Tooltip } from "@nextui-org/react";
import { OverlayPlacement } from "@nextui-org/aria-utils";
import { LuArrowBigUpDash } from "react-icons/lu";
import { MyIcon } from "@/components/my-icon";

const scrollTopBtn = ({className, tooltip, variant} : {
    className?: string,
    variant?: "shadow" | "flat" | "ghost" | "light" | "solid" | "bordered" | "faded" | undefined
    tooltip?: OverlayPlacement | undefined
}) => {
    return (
        <Tooltip showArrow placement={tooltip} content="回到顶部">
            <Button
                className={className}
                isIconOnly
                aria-label="Go Top"
                color={"primary"}
                variant={variant}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <MyIcon icon={LuArrowBigUpDash} size={20 }/>
            </Button>
        </Tooltip>

    )
}

export default scrollTopBtn;

