import React from 'react';

type BodyTextProps = {
  body: string;
};

export default function BodyText({ body }: BodyTextProps) {
  return <div>{body}</div>;
}
