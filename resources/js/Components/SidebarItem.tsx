import React, { useState } from "react";

interface Props {
    svgIcon: ReactElement;
    text: string;
    primaryPillText?: string;
    secondaryPillText?: string;
    indentation?: number;
    href?: string;
    // children: any;
}

const SidebarItem: React.FC<Props> = ({
    svgIcon,
    text,
    primaryPillText,
    secondaryPillText,
    indentation = 0,
    href,
}: Props) => {
    const indentationClass = {
        0: "",
        1: "pl-4",
        2: "pl-8",
    };
    return (
        <li>
            <a
                href="#"
                className={`flex items-center p-2 ${indentationClass[indentation]} text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700`}
            >
                {/* {indentation === 0 && svgIcon} */}
                {/* <span className="ml-3">{text}</span> */}
                <span className="flex-1 ml-3 whitespace-nowrap">{text}</span>
                {primaryPillText && (
                    <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                        {primaryPillText}
                    </span>
                )}
                {secondaryPillText && (
                    <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                        {secondaryPillText}
                    </span>
                )}
            </a>
        </li>
    );
};

export default SidebarItem;
