'use client'

import BackArrow from '../components/backarrow';
import ProjectDescription from '../components/projectdescription';
import Timer from './timer';

export default function Page() {
  return (
    <div>
      <BackArrow />
      <Timer />
      <ProjectDescription title="Pomodoro Timer" description="Test description" />
    </div>
  );
}
