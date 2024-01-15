'use client';

import { KeyboardDoubleArrowDown, KeyboardDoubleArrowUp } from "@mui/icons-material";
import { Button } from "@nextui-org/button";
import React from "react";
import { Tooltip } from "@nextui-org/react";

const scrollTopBtn = ({className}: { className?: string }) => {
    return (
        <Tooltip showArrow placement={"bottom-start"} content="回到顶部">
            <Button
                className={className}
                isIconOnly
                aria-label="Go Top"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <KeyboardDoubleArrowUp />
            </Button>
        </Tooltip>

    )
}

export default scrollTopBtn;

