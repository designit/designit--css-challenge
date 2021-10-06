import Text from './Text';
import Heading from './Heading';

type CardProps = {
  heading: string;
  body: string;
  image: string;
  imageAlt: string;
};

export default function Card({ heading, body, image, imageAlt }: CardProps) {
  return (
    <article>
      {/* Setting width temporary so we can see what is going on. */}
      <img src={image} style={{ maxWidth: '200px' }} alt={imageAlt} />
      <Heading heading={heading} size="medium" />
      <Text body={body} />
    </article>
  );
}
