'use client';

import { KeyboardDoubleArrowDown } from "@mui/icons-material";
import { Button } from "@nextui-org/button";
import React from "react";
import { Tooltip } from "@nextui-org/react";
import { OverlayPlacement } from "@nextui-org/aria-utils";

const scrollPostEndBtn = ({id, className, tooltip, variant} : {
    id: string,
    className?: string,
    variant?: "shadow" | "flat" | "ghost" | "light" | "solid" | "bordered" | "faded" | undefined
    tooltip?: OverlayPlacement | undefined
}) => {
    return (
        <Tooltip showArrow placement={tooltip} content="前往文末">
            <Button
                className={className}
                isIconOnly
                aria-label="Go End"
                color={"primary"}
                variant={variant}
                onClick={
                    () => {
                        const element = document.getElementById(id);
                        if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}
            >
                <KeyboardDoubleArrowDown />
            </Button>
        </Tooltip>
    )

}
export default scrollPostEndBtn;

