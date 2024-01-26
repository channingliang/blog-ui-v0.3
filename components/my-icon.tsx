import { IconBaseProps } from "react-icons";
import { IconType } from "react-icons";
import React from "react";

interface MyIconProps extends IconBaseProps {
    icon: IconType;
}

export const MyIcon: React.FC<MyIconProps & React.HTMLProps<SVGElement>> = (
    { icon: Icon, size = "1rem", ...props }
) => <Icon size={size} style={{ verticalAlign: 'middle' }} {...props} />;
