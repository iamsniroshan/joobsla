import { adminLayout } from "components/admin/Layout";
import dynamic from "next/dynamic";

const HomeComponent = dynamic(() => import("components/admin/Home"));

const Home = () => {
  return <HomeComponent />;
};

Home.auth = true;
Home.getLayout = adminLayout;

export default Home;
