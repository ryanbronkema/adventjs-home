import BackArrow from "../components/backarrow";
import ProjectDescription from "../components/projectdescription";
import Keyboard from "./keyboard";

export default function Page() {
  return (
    <div>
      <BackArrow />
      <Keyboard />
      <ProjectDescription
        pageTitle="Eyes on the Screen"
        pageDescription="The keyboard will prompt users to type a key by jiggling, and upon correct input, a new random key will start jiggling."
      />
    </div>
  );
}
