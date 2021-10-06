import Card from './Card';
import dummyImage from './images/dummy.jpg';

export default function Cards() {
  return (
    <section>
      <Card
        heading={`The home office`}
        body={`Etiam at ornare magna. Quisque ullamcorper ante neque, et pharetra nisl sollicitudin.`}
        image={dummyImage}
        imageAlt={`Dummy alt`}
      />
      <Card
        heading={`The shared space`}
        body={`Curabitur ut consequat metus. Phasellus malesuada tincidunt elit, posuere gravida felis congue ac. Quisque vitae arcu non risus volutpat.`}
        image={dummyImage}
        imageAlt={`Etiam at ornare magna.`}
      />
      <Card
        heading={`The hot desk`}
        body={`Office desk; open or closed`}
        image={dummyImage}
        imageAlt={`Etiam at ornare magna.`}
      />
      <Card
        heading={`The meeting room`}
        body={`A seamless working experience across productivity tools such as Office 365, Miro, and AppSpace`}
        image={dummyImage}
        imageAlt={`Etiam at ornare magna.`}
      />
    </section>
  );
}
