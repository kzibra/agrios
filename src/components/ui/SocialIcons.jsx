import React from 'react';
import { SOCIAL_MEDIA } from '../../utils/constants';

/**
 * Reusable component for displaying social media icons
 * @param {Object} props - Component props
 * @param {Array} props.socialMedia - Array of social media objects
 * @param {string} props.iconColor - Color of the icons
 * @param {string} props.hoverColor - Color of the icons on hover
 * @param {number} props.size - Size of the icons
 * @param {string} props.className - Additional CSS classes
 */
const SocialIcons = ({
  socialMedia = [],
  iconColor = 'text-current',
  hoverColor = 'hover:text-green-500',
  size = 20,
  className = '',
  spacing = 2.5,
}) => {
  // If no social media is provided, use default from constants
  const icons = socialMedia.length > 0 ? socialMedia : SOCIAL_MEDIA;

  return (
    <div className={`flex space-x-${spacing} ${className}`}>
      {icons.map((social) => {
        const IconComponent = social.icon;
        
        return (
          <a
            key={social.alt}
            href={social.href}
            className={`p-[7px] rounded-full transition-colors bg-gray-100 hover:bg-gray-200 ${iconColor} ${hoverColor}`}
            aria-label={social.alt}
          >
            <IconComponent size={size} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
