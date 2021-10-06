type TextProps = {
  body: string;
};

export default function Text({ body }: TextProps) {
  return <div>{body}</div>;
}
