'use client';

import { BreadcrumbItem, BreadcrumbItemProps, Breadcrumbs } from "@nextui-org/react";

interface BreadcrumbProps {
    size?: "md" | "sm" | "lg" | undefined;
    items: BreadcrumbItemProps[];
}

const IBreadcrumbs = ({ size, items }: BreadcrumbProps) => {
    return (
        <Breadcrumbs size={size} underline={"hover"}>
            {items.map((item, index) => (
                <BreadcrumbItem className={"overflow-auto"} key={index} href={item.href} isDisabled={item.isDisabled}>
                    {item.children}
                </BreadcrumbItem>
            ))}
        </Breadcrumbs>
    );
}

export default IBreadcrumbs;
