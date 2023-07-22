import BackArrow from '../components/backarrow';
import ProjectDescription from '../components/projectdescription';
import Piano from './piano';

export default function Page() {
  return (
    <div>
      <BackArrow />
      <Piano />
      <ProjectDescription 
        pageTitle="SFX Piano" 
        pageDescription="This project creates a virtual piano component where each key, represented by SVG paths, plays a corresponding audio file when clicked."
      />
    </div>
  );
}
