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
        pageDescription="This page is a To-Go Menu application. It allows users to view a list of food items, add them to their cart with quantities, and see a summary of their selected items with a subtotal."
      />
    </div>
  );
}
