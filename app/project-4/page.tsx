import BackArrow from '../components/backarrow';
import ProjectDescription from '../components/projectdescription';
import Keyboard from './keyboard';

export default function Page() {
  return (
    <div>
      <BackArrow />
      <Keyboard />
      <ProjectDescription 
        pageTitle="Project 4" 
        pageDescription="Description"
      />
    </div>
  );
}
