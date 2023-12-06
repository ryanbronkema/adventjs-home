import BackArrow from "../components/backarrow";
import ProjectDescription from "../components/projectdescription";
import Menu from "./menu";

export default function Page() {
  return (
    <div>
      <BackArrow />
      <Menu />
      <ProjectDescription
        pageTitle="E-commerce component"
        pageDescription="A To-Go Menu application. Users can view a list of food items, add them to their cart with quantities, and see a summary of their selected items with a subtotal."
      />
    </div>
  );
}
