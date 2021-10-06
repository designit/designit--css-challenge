import React from 'react';

type HeadingProps = {
  heading: string;
  size: 'large' | 'medium' | 'small';
};

export default function Heading({ heading, size }: HeadingProps) {
  return <h1>{heading}</h1>;
}
