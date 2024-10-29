import DesktopNavlinks from "./DesktopNavlinks"

const Navigation = () => {
    return (
        <div className="bg-transparent backdrop-blur-sm md:px-6 py-3 absolute flex justify-between items-center w-full">
            <div className="logo">
                <span className="text-white tracking-tighter font-semibold text-2xl">
                    LYDIA
                </span>

            </div>
            {/* Desktop navigation links */}
            <DesktopNavlinks />
        </div>
    )
}

export default Navigation