import { Banner, SectionWithContainer } from "@/components";
import { homePageData } from "@/data/pageData";
import About from "./components/About";
import MainHeading from "../../components/Heading/MainHeading";
import WhyStucco from "./components/WhyStucco";
import OurProducts from "./components/OurProducts";
export default function Home() {
  return (
    <main>
      <Banner {...homePageData.bannerData} />
      <About {...homePageData.aboutUsData} />
      <SectionWithContainer sectionClassName=" relative after:absolute after:bg-[url('/bg4.png')] after:w-full after:bg-no-repeat after:h-[100%]  after:bottom-0  after:z-[-1]">
        <div className="w-full flex flex-col items-center gap-4 justify-center">
          <MainHeading
            h2
            title={homePageData.WhyChooseUs.title}
            className="!text-primary uppercase font-bold manrope"
          />
          <p className="text-center text-tertiary lg:max-w-[58rem] w-full">
            {homePageData.WhyChooseUs.desc}
          </p>
        </div>
      </SectionWithContainer>
      <WhyStucco {...homePageData.whyStucco} />
      <OurProducts {...homePageData.ourProducts} />
    </main>
  );
}
