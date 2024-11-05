import Image from "next/image"

const AppDisplay = () => {
  return (
    <div className="max-w-[900px] px-[1rem] mx-auto">
        <div className="flex gap-[1.5rem]">
            <div>
                <Image src={"/assets/mockup.png"} alt="Application Mockup" width={400} height={400}/>
            </div>

            {/* <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-2">
                    <h2 className="text-white font-semibold tracking-tighter text-[2rem] [text-shadow:1px_1px_10px_rgb(0_0_0_/_50%)] leading-[35px] capitalize">
                        Make your life easier with the cyclesync mobile app
                    </h2>

                    <p>

                    </p>
                </div>

                <div>

                </div>
            </div> */}
        </div>
    </div>
  )
}

export default AppDisplay