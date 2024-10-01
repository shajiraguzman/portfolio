import React from 'react';
import { SocialIcon } from 'react-social-icons';

const SocialIconComponent = ({ url }) => {
  return (
    <div>
      <SocialIcon url={url} />
    </div>
  );
};

export default SocialIconComponent;