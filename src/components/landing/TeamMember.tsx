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
            <div className="absolute max-sm:h-[70px] max-sm:w-[70px] top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image
                    src={image}
                    alt={`${name}'s profile picture`}
                    width={80}
                    height={80}
                    className="rounded-full border-4 border-white shadow-md object-cover"
                />
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
                    <a href={linkedin} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={20} className="text-purple-700" />
                    </a>
                }
                {/* {instagram &&
                    <a href={instagram} target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={20} className="text-purple-500" />
                    </a>
                }
                {twitter &&
                    <a href={twitter} target="_blank" rel="noopener noreferrer">
                        <FaX size={20} className="text-purple-500" />
                    </a>
                } */}
                {github &&
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        <FaGithub size={20} className="text-purple-700" />
                    </a>
                }
            </div>
        </div>
    )
}

export default TeamMember