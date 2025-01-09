import React from 'react';
import { TeamMemberProps } from './TeamMember';
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const TeamMemberDetails: React.FC<TeamMemberProps> = ({ name, designation, vision, twitter, instagram, github, linkedin }) => {
  return (
    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-8 w-64 bg-white bg-opacity-20 backdrop-blur-lg text-black rounded-lg p-4 shadow-lg">
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white"></div>
      <h2 className="text-xl font-bold text-white">{name}</h2>
      <p className="text-sm text-white">{designation}</p>
      <p className="text-sm mt-2 text-white">{vision}</p>
      <div className="flex space-x-4 mt-4">
        <a href={twitter} target="_blank" rel="noopener noreferrer" className="text-white">
          <FaTwitter />
        </a>
        <a href={instagram} target="_blank" rel="noopener noreferrer" className="text-white">
          <FaInstagram />
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer" className="text-white">
          <FaGithub />
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-white">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default TeamMemberDetails;