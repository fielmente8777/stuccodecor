import { Banner2 } from "@/components";
import { contactPageData } from "@/data/pageData";
import ContactUs from "./Components/ContactUs";
import LazyLoadedMap from "@/components/map/LazyLoadedMap";

const page = () => {
  return (
    <main>
      <Banner2 {...contactPageData.bannerData} />
      <ContactUs {...contactPageData.contactDetails} />
      <div className="max-w-6xl mx-auto max-lg:px-4 aspect-square lg:aspect-[4/1.5]">
        <LazyLoadedMap src={contactPageData.map} />
      </div>
    </main>
  );
};

export default page;
