import { Section } from "@/components";
import Image from "next/image";

interface portfolioCardProps {
  cards: {
    src: string;
  }[];
}
const PortfolioCard: React.FC<portfolioCardProps> = ({ cards }) => {
  return (
    <Section>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 px-4">
        {cards.map((card) => (
          <div className="w-full relative aspect-[4/3]" key={card.src}>
            <Image
              src={card.src}
              alt="portfolio"
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default PortfolioCard;
