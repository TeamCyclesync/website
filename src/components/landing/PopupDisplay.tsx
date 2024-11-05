import {FC} from "react"
import { cn } from "@/lib/utils"
import {
    motion
} from "framer-motion"
import { easeInOut } from "framer-motion/dom"
import { IconType } from "react-icons"

export interface PopupDisplayProps {
    popFrom?: string,
    triggerView?: boolean,
    icon?: IconType,
    label?: string,
    className?: string,
    delayAmount?: number,
    smallerScreenSupport?: boolean,
}

const PopupDisplay:FC<PopupDisplayProps> = ({popFrom, triggerView, icon: IconComponent, label, delayAmount, className, smallerScreenSupport}) => {
  return (
    <motion.div
        initial={{
            opacity: 0,
            translateX: popFrom == 'left' ? '-100px' : '100px',
        }}
        animate={{
            opacity: triggerView ? 1 : 0,
            translateX: triggerView ?  0 : popFrom == 'left' ? '-100px' : '100px',
            transition: {
                delay: delayAmount,
                ease: easeInOut,
                once: true
            }
        }}

        className={cn("rounded-lg text-purple-900 font-medium p-2 sm:py-4 sm:px-6 bg-white absolute shadow-lg z-[120] text-sm flex gap-4 flex-col justify-center items-center", className)}
    >
        {IconComponent && <IconComponent size={35} className="text-purple-600"/>}
        <span className="max-w-[100px] leading-4 sm:text-[1rem] text-[0.75rem]">
            {label}
        </span>
    </motion.div>
  )
}

export default PopupDisplay