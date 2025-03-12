'use client'
import Image from "next/image"

const DownloadCTA = () => {
    return (
        <div className="max-w-[800px] mx-auto px-[1rem] relative mt-12"
            id="get-started"
        >
            <div className="flex gap-2 sm:flex-row flex-col items-center text-center">
                <div className="md:relative max-md:flex justify-center items-center w-[200px] h-[300px] md:w-[300px] md:h-[400px]">
                    <picture>
                        <source media="(max-width: 768px)" srcSet="https://syedfahad7.github.io/Portfolio_project_vids/videos/download-mockup.png" />
                        <source media="(min-width: 640px)" srcSet="https://syedfahad7.github.io/Portfolio_project_vids/videos/mockup.png" />
                        <Image
                            src="https://syedfahad7.github.io/Portfolio_project_vids/videos/mockup.png"
                            alt="Application Mockup"
                            width={300}
                            height={400}
                            className="max-md:object-cover max-md:w-auto max-md:h-[310px] md:absolute md:-right-[20%] lg:-right-[20%] md:top-[50%] md:-translate-y-[50%] md:w-auto md:h-auto"
                            sizes="(max-width: 768px) 150px, (min-width: 768px) 300px"
                            priority
                        />
                    </picture>
                </div>

                <div className="flex flex-col gap-6 max-sm:mt-8">
                    <h3 className="max-sm:max-w-[350px] sm:max-w-[450px] text-[2rem] md:text-[2.5rem] tracking-tighter font-semibold text-white leading-[35px] sm:leading-[40px] text-shadow-200">Coming Soon on Playstore and App Store</h3>
                    <div className="flex gap-2 items-center justify-center">
                        <div className="flex gap-2 max-xxsm:flex-col items-center justify-center">
                            <div className="relative h-[50px] w-[150px] sm:h-[60px] sm:w-[160px] rounded-lg">
                                <Image
                                    src={"/assets/google-play.png"}
                                    alt="Google Play Store Image"
                                    fill
                                    className="object-cover rounded-lg"
                                    priority
                                    sizes="(max-width: 768px) 150px, 160px"
                                />
                            </div>
                            <div className="relative h-[50px] w-[150px] sm:h-[50px] sm:w-[160px] rounded-lg">
                                <Image
                                    src={"/assets/app-store.png"}
                                    alt="App Store Image"
                                    fill
                                    className="object-cover rounded-lg"
                                    priority
                                    sizes="(max-width: 768px) 150px, 160px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadCTA