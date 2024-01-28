import React, { FC } from 'react';
import { MyIcon } from "@/components/my-icon";
import { IconType } from "react-icons";

interface InfoCardProps {
    icon: IconType;
    mainText: string;
    greyText?: string;
}

const InfoCard: FC<InfoCardProps> = ({ icon, mainText, greyText }) => {
    return (
        <div className="flex flex-auto justify-center md:justify-start md:flex-none md:col-span-1">
            <div className="flex items-center gap-1">
                <MyIcon icon={icon} />
                <div className="ml-1 flex flex-col">
                    <div className="text-sm">{mainText}</div>
                    <div className="text-sm text-default-500">{greyText}</div>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;
