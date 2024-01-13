import React, { FC } from 'react';

interface InfoCardProps {
    IconComponent: FC;
    mainText: string;
    secondaryText?: string;
}

const InfoCard: FC<InfoCardProps> = ({ IconComponent, mainText, secondaryText }) => {
    return (
        <div className="flex-auto md:flex-none md:col-span-1">
            <div className="flex items-center gap-1">
                <IconComponent />
                <div className="flex flex-col">
                    <div className="text-sm">{mainText}</div>
                    <div className="text-sm text-default-500">{secondaryText}</div>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;
