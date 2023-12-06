import BackArrow from "../components/backarrow";
import ProjectDescription from "../components/projectdescription";
import Checkbox from "./checkbox";

export default function Page() {
  return (
    <div>
      <BackArrow />
      <Checkbox />
      <ProjectDescription
        pageTitle="Multiple Checkboxes"
        pageDescription="Interact with the checkboxes to select individual episodes or use shift-click to efficiently select a range of episodes."
      />
    </div>
  );
}
