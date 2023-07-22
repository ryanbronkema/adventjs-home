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
        pageDescription="This page is a timer application. It allows users to set a countdown time, start, pause, and reset the timer. Users can also access settings to edit the timer duration."
      />
    </div>
  );
}
