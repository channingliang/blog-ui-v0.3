import React, { ReactNode } from 'react';

interface TitledDivProps {
    title: string;
    children?: ReactNode;
    className?: string;
}

const TitledDiv: React.FC<TitledDivProps> = ({ title, children, className }) => {
    return (
        <div className="sidebar-box relative w-full">
            <div className="absolute top-0 left-2 transform -translate-y-1/2 px-1 bg-background text-[.7rem]">
                {title}
            </div>
            <div className={`${className} overflow-ellipsis`}>{children}</div>
        </div>
    );
};

export default TitledDiv;
