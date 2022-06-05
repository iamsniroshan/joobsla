import { userLayout } from "components/web/Layout";
import Example from "components/web/Test/Test";
import dynamic from "next/dynamic";


const ExampleCom = dynamic(() => import("components/web/Test/Test"));

const Test = () => {
  return <ExampleCom/>
};
Test.getLayout = userLayout
export default Test;