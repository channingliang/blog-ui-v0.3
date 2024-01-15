'use client';

import { KeyboardDoubleArrowDown } from "@mui/icons-material";
import { Button } from "@nextui-org/button";
import React from "react";
import { Tooltip } from "@nextui-org/react";

const scrollPostEndBtn = ({id, className} : { id: string, className?: string }) => {
    return (
        <Tooltip showArrow placement={"bottom-end"} content="前往文末">
            <Button
                className={className}
                isIconOnly
                aria-label="Go End"
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

