import BackArrow from '../components/backarrow';
import ProjectDescription from '../components/projectdescription';
import Timer from './timer';

export default function Page() {
  return (
    <div>
      <BackArrow />
      <Timer />
      <ProjectDescription 
        pageTitle="Pomodoro Timer" 
        pageDescription="Test description lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
      />
    </div>
  );
}
