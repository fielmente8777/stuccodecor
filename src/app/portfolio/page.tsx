import { Banner2 } from "@/components";
import { portfolioPageData } from "@/data/pageData";
import PortfolioCard from "./components/PortfolioCard";

const page = () => {
  console.log(portfolioPageData.products[0].src);
  return (
    <main>
      <Banner2 {...portfolioPageData.bannerData} />
      <PortfolioCard cards={portfolioPageData.products}/>
    </main>
  );
};

export default page;
