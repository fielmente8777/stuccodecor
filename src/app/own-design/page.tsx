import { Banner2 } from "@/components";
import DesignForm from "./components/DesignForm";

const page = () => {
  return (
    <main>
      <Banner2
        title="Create Your Own Design"
        links={[
          { label: "home", href: "/" },
          { label: "own design", href: "/own-design" },
        ]}
      />
      <DesignForm />
    </main>
  );
};

export default page;
