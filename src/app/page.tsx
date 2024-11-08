import CTA from "./components/CTA";
import Card from "./components/Card";
import Container from "./components/Container";

const cardData = [
  {
    imageUrl: "/images/sport1.webp",
    title: "Handball",
    description: "Nos équipes auront à cœur de briller",
  },
  {
    imageUrl: "/images/sport2.webp",
    title: "Rugby à 7",
    description: "Une autre façon de pratiquer le ballon ovale",
  },
  {
    imageUrl: "/images/sport3.webp",
    title: "Breaking",
    description: "La danse urbaine devient sport",
  },
  {
    imageUrl: "/images/sport4.webp",
    title: "Haltérophilie",
    description: "Du lourd",
  },
  {
    imageUrl: "/images/sport5.webp",
    title: "Purring",
    description: "Des juges exigeants",
  },
  {
    imageUrl: "/images/sport6.webp",
    title: "Surf",
    description: "Les plus beaux spots",
  },
];

export default function Home() {
  return (
    <div>
      <CTA />
      <Container className="my-12">
        <h2 className="font-rso text-3xl mb-8 text-center">
          Les sports à découvrir
        </h2>
        <div className="mx-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </Container>
    </div>
  );
}
