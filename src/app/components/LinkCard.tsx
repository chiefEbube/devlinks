'use client';
import React, { FC, useState } from 'react';
import Image from 'next/image';

import GithubIcon from '../../../public/assets/icon/icon-github.svg';
import FrontendMentorIcon from '../../../public/assets/icon/icon-frontendmentor.svg';
import TwitterIcon from '../../../public/assets/icon/icon-twitter.svg';
import LinkedinIcon from '../../../public/assets/icon/icon-linkedin.svg';
import YoutubeIcon from '../../../public/assets/icon/icon-youtube.svg';
import FacebookIcon from '../../../public/assets/icon/icon-facebook.svg';
import TwitchIcon from '../../../public/assets/icon/icon-twitch.svg';
import DevtoIcon from '../../../public/assets/icon/icon-devto.svg';
import CodewarsIcon from '../../../public/assets/icon/icon-codewars.svg';
import CodepenIcon from '../../../public/assets/icon/icon-codepen.svg';
import FreeCodeCampIcon from '../../../public/assets/icon/icon-freecodecamp.svg';
import GitlabIcon from '../../../public/assets/icon/icon-gitlab.svg';
import HashnodeIcon from '../../../public/assets/icon/icon-hashnode.svg';
import StackOverFlowIcon from '../../../public/assets/icon/icon-stack-overflow.svg';

type SocialMediaPlatform =
  | 'Github'
  | 'FrontendMentor'
  | 'Twitter'
  | 'Linkedin'
  | 'Youtube'
  | 'Facebook'
  | 'Twitch'
  | 'Devto'
  | 'Codewars'
  | 'Codepen'
  | 'FreeCodeCamp'
  | 'Gitlab'
  | 'Hashnode'
  | 'StackOverFlow';

interface LinkCardProps {
  id: number;
  position: number;
  onRemove: (id: number) => void;
}

const socialMediaOptions: SocialMediaPlatform[] = [
  'Github',
  'FrontendMentor',
  'Twitter',
  'Linkedin',
  'Youtube',
  'Facebook',
  'Twitch',
  'Devto',
  'Codewars',
  'Codepen',
  'FreeCodeCamp',
  'Gitlab',
  'Hashnode',
  'StackOverFlow'
];

const socialMediaIcons: Record<SocialMediaPlatform, string> = {
  Github: GithubIcon,
  FrontendMentor: FrontendMentorIcon,
  Twitter: TwitterIcon,
  Linkedin: LinkedinIcon,
  Youtube: YoutubeIcon,
  Facebook: FacebookIcon,
  Twitch: TwitchIcon,
  Devto: DevtoIcon,
  Codewars: CodewarsIcon,
  Codepen: CodepenIcon,
  FreeCodeCamp: FreeCodeCampIcon,
  Gitlab: GitlabIcon,
  Hashnode: HashnodeIcon,
  StackOverFlow: StackOverFlowIcon,
};

const exampleLinks: Record<SocialMediaPlatform, string> = {
  Github: 'https://github.com/username',
  FrontendMentor: 'https://www.frontendmentor.io/profile/username',
  Twitter: 'https://twitter.com/username',
  Linkedin: 'https://www.linkedin.com/in/username',
  Youtube: 'https://www.youtube.com/user/username',
  Facebook: 'https://www.facebook.com/username',
  Twitch: 'https://www.twitch.tv/username',
  Devto: 'https://dev.to/username',
  Codewars: 'https://www.codewars.com/users/username',
  Codepen: 'https://codepen.io/username',
  FreeCodeCamp: 'https://www.freecodecamp.org/username',
  Gitlab: 'https://gitlab.com/username',
  Hashnode: 'https://hashnode.com/@username',
  StackOverFlow: 'https://stackoverflow.com/users/username'
};

const LinkCard: FC<LinkCardProps> = ({ id, position, onRemove }) => {
  const [selectedSocialMedia, setSelectedSocialMedia] = useState<SocialMediaPlatform>('Github');
  const [link, setLink] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleRemove = () => {
    onRemove(id);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option: SocialMediaPlatform) => {
    setSelectedSocialMedia(option);
    setLink(''); // Reset link when changing platform
    setIsDropdownOpen(false);
  };

  return (
    <div className="bg-gray-300 mt-6 rounded py-5 px-5 flex flex-col gap-4 text-gray-100">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">Link #{position}</h2>
        <button
          onClick={handleRemove}
          className="px-3 py-1 bg-red-500 rounded-md hover:bg-red-600"
        >
          Remove
        </button>
      </div>

      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center p-3 border border-gray-300 rounded-md bg-white shadow-sm w-full text-left"
        >
          <Image
            src={socialMediaIcons[selectedSocialMedia]}
            alt={selectedSocialMedia}
            width={18}
            height={18}
          />
          <span className="ml-2">{selectedSocialMedia}</span>
          <svg
            className={`ml-auto w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isDropdownOpen && (
          <div className="absolute z-10 mt-2 w-full p-6 bg-white border border-gray-300 rounded-md shadow-lg">
            {socialMediaOptions.map((option) => (
              <button
                key={option}
                onClick={() => handleOptionClick(option)}
                className="flex items-center w-full px-4 py-3 hover:bg-gray-300 text-left border-b border-gray-200 last:border-b-0"
              >
                <Image src={socialMediaIcons[option]} alt={option} width={18} height={18} />
                <span className="ml-2">{option}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="relative flex items-center">
        <Image
          src="/assets/icon/icon-link.svg"
          alt="Link"
          width={12}
          height={12}
          className="absolute left-5 top-6"
        />
        <input
          id={`link-${id}`}
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder={`e.g ${exampleLinks[selectedSocialMedia]}`}
          className="mt-1 block w-full p-3 border border-gray-200 rounded focus:shadow-input outline-none pl-10"
        />
      </div>
    </div>
  );
};

export default LinkCard;
