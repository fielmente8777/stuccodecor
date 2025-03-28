import { Banner2 } from "@/components";
import CustomQuotationRequest from "./components/CustomQuotationRequest";

const page = () => {
  return (
    <main>
      <Banner2
        title="Custom Quotation Request"
        links={[
          { label: "home", href: "/" },
          { label: "custom quotation request", href: "/quote-form" },
        ]}
      />
      <CustomQuotationRequest />
    </main>
  );
};

export default page;
