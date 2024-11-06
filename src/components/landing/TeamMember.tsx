import Image from "next/image"
import { FC } from "react"
import { FaInstagram } from "react-icons/fa"
import { FaX } from "react-icons/fa6"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"

export interface TeamMemberProps {
    name: string,
    designation: string,
    image: string,
    vision: string,
    linkedin?: string,
    instagram?: string,
    twitter?: string,
    github?: string
}

const TeamMember: FC<TeamMemberProps> = ({ name, designation, image, vision, linkedin, instagram, twitter, github }) => {
    return (
        <div className="relative bg-white shadow-lg hover:shadow-xl hover:scale-105 px-8 pt-[3rem] md:pt-[3.5rem] pb-4 rounded-xl transition-all duration-300 ease-in-out flex flex-col gap-4">
            {/* Team member pfp */}
            <div className="absolute rounded-full h-[60px] w-[60px] md:h-[75px] md:w-[75px] top-[-15%] left-[50%] translate-x-[-50%] border-[5px] border-white shadow-md">
                <Image src={image} alt={`${name}'s Profile Picture`} width={100} height={100} className="object-contain" />
            </div>

            {/* name and designation */}
            <div className="text-center flex flex-col">
                <span className="tracking-tight text-purple-800 font-semibold text-[1rem]">
                    {name}
                </span>
                <span className="text-sm text-purple-300">
                    {designation}
                </span>
            </div>

            {/* Vision */}
            <p className="leading-5 tracking-tight text-sm text-muted-foreground mb-4">
                {vision}
            </p>

            {/* Socials, TODO: Change links */}
            <div className="flex w-fit mx-auto gap-3 justify-center items-center">
                {linkedin &&
                    <a href={linkedin} target="_blank">
                        <FaLinkedin size={20} className="text-purple-700" />
                    </a>
                }
                {/* {instagram &&
                    <a href={instagram} target="_blank">
                        <FaInstagram size={20} className="text-purple-500" />
                    </a>
                }
                {twitter &&
                    <a href={twitter} target="_blank">
                        <FaX size={20} className="text-purple-500" />
                    </a>
                } */}
                {github &&
                    <a href={github} target="_blank">
                        <FaGithub size={20} className="text-purple-700" />
                    </a>
                }
            </div>
        </div>
    )
}

export default TeamMember