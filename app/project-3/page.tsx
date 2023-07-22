import BackArrow from '../components/backarrow';
import ProjectDescription from '../components/projectdescription';
import Piano from './piano';

export default function Page() {
  return (
    <div>
      <BackArrow />
      <Piano />
      <ProjectDescription 
        pageTitle="Piano" 
        pageDescription="Description"
      />
    </div>
  );
}
