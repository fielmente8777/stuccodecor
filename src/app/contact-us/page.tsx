import { Banner2 } from "@/components";
import { contactPageData } from "@/data/pageData";

const page = () => {
  return (
    <main>
      <Banner2 {...contactPageData.bannerData} />
    </main>
  );
};

export default page;
