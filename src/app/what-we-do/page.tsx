import { Banner2 } from "@/components";
import { whatWeDoPageData } from "@/data/pageData";
import WhatWeDo from "./components/WhatWeDo";
import History from "./components/History";
import IntroToMaterial from "./components/IntroToMaterial";
import ManufacturingProcess from "./components/ManufacturingProcess";
import HundredsOfCustomers from "./components/HundredsOfCustomers";

const page = () => {
  return (
    <main>
      <Banner2 {...whatWeDoPageData.bannerData} />
      <WhatWeDo {...whatWeDoPageData.whatWedodata}/>
      <History {...whatWeDoPageData.briefHistory} />
      <IntroToMaterial {...whatWeDoPageData.introductionToMaterial}/>
      <ManufacturingProcess {...whatWeDoPageData.manufacturingProcess}/>
      <HundredsOfCustomers {...whatWeDoPageData.hundredsOfCustomers}/>
    </main>
  );
};

export default page;
