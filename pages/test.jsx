import { userLayout } from "components/web/Layout";
import dynamic from "next/dynamic";


const TestComponent = dynamic(() => import("components/web/Test/Test"));

const Test = () => {
  return <TestComponent/>
};
Test.getLayout = userLayout
export default Test;