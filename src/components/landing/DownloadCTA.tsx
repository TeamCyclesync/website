import Image from "next/image"

const DownloadCTA = () => {
  return (
    <div className="max-w-[800px] mx-auto px-[1rem] relative">
        <div className="flex gap-2">
            <Image 
                src={"/assets/mockup.png"}
                alt="Application Mockup"
                width={300}
                height={300}
            />

            <div className="flex flex-col gap-6">
                <h3 className="text-[2.5rem] tracking-tighter font-semibold text-white leading-[40px]">Coming Soon on Playstore and App Store</h3>
                <div className="flex gap-2">
                    <div className="relative h-[50px] w-[150px]">
                        <Image
                            src={"/assets/google-play.png"}
                            alt="Google Play Store Image"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative h-[50px] w-[150px]">
                        <Image
                            src={"/assets/app-store.png"}
                            alt="Google Play Store Image"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DownloadCTA