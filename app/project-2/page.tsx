import BackArrow from '../components/backarrow';
import ProjectDescription from '../components/projectdescription';
import Menu from './menu';

export default function Page() {
  return (
    <div>
      <BackArrow />
      <Menu />
      <ProjectDescription 
        pageTitle="E-commerce component"
        pageDescription="Test description lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
      />
    </div>
  );
}
