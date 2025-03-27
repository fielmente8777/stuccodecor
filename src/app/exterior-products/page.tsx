import { Banner2 } from "@/components";
import { exteriorProductspageData } from "@/data/pageData";
import ProductsCategory from "./components/ProductsCategory";

const page = () => {
  return (
    <main>
      <Banner2 {...exteriorProductspageData.bannerData} />
      <ProductsCategory {...exteriorProductspageData.productsCategory}/>
    </main>
  );
};

export default page;
