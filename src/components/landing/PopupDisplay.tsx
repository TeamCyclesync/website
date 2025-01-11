import { FC } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { easeInOut } from "framer-motion/dom";
import { IconType } from "react-icons";

export interface PopupDisplayProps {
    popFrom?: string;
    triggerView?: boolean;
    icon?: IconType;
    label?: string;
    className?: string;
    delayAmount?: number;
}

const PopupDisplay: FC<PopupDisplayProps> = ({
    popFrom,
    triggerView,
    icon: IconComponent,
    label,
    delayAmount,
    className,
}) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                translateX: popFrom == "left" ? "-100px" : "100px",
            }}
            animate={{
                opacity: triggerView ? 1 : 0,
                translateX: triggerView
                    ? 0
                    : popFrom == "left"
                    ? "-100px"
                    : "100px",
                transition: {
                    delay: delayAmount,
                    ease: easeInOut,
                    once: true,
                },
            }}
            whileHover={{ scale: 1.05 }}
            className={cn(
                "rounded-lg text-purple-900 font-medium p-2 sm:py-4 sm:px-6 bg-white absolute shadow-lg z-[120] text-sm flex gap-4 flex-col justify-center items-center max-sm:pt-4",
                className
            )}
        >
            {IconComponent && (
                <span className="p-2 sm:p-2 rounded-full border-[3px] border-purple-600">
                    <IconComponent
                        size={30}
                        className="text-purple-600 max-sm:h-[25px] max-sm:w-[25px]"
                    />
                </span>
            )}
            <span className="w-[90px] sm:w-[100px] md:w-[120px] font-regular leading-4 sm:text-[1rem] text-[1rem] tracking-normal font-poppins">
                {label}
            </span>
        </motion.div>
    );
};

export default PopupDisplay;