import { adminLayout } from "components/admin/Layout";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { useEffect } from 'react';

const HomeComponent = dynamic(() => import("components/admin/Home"));

const Home = () => {
  return <HomeComponent />;
};

Home.auth = true;
Home.getLayout = adminLayout;

export default Home;
