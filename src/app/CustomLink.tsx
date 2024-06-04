import React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

interface CustomLinkProps extends NextLinkProps {
  href: string;
  children: React.ReactNode;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, children, ...props }) => {
  const isInternalLink = href.startsWith('/');

  if (isInternalLink) {
    return (
      <NextLink href={href} {...props}>
        {children}
      </NextLink>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
};

export default CustomLink;
