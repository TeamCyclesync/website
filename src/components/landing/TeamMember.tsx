'use client'
import React, { useState } from 'react';
import TeamMemberDetails from './TeamMemberDetails';

export interface TeamMemberProps {
  name: string;
  designation: string;
  vision: string;
  image: string;
  twitter: string;
  instagram: string;
  github: string;
  linkedin: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, designation, vision, image, twitter, instagram, github, linkedin }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="relative flex flex-col items-center text-center">
      <img 
        src={image} 
        alt={name} 
        className="rounded-full border-4 border-white w-24 h-24 md:w-28 md:h-28 mb-4 cursor-pointer" 
        onClick={handleToggleDetails}
      />
      {showDetails && (
        <TeamMemberDetails
          name={name}
          designation={designation}
          vision={vision}
          twitter={twitter}
          instagram={instagram}
          github={github}
          linkedin={linkedin} image={''}        />
      )}
    </div>
  );
};

export default TeamMember;