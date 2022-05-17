import { adminLayout } from "components/admin/Layout";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { useEffect } from 'react';

const UserPoolComponent = dynamic(() =>
  import("components/admin/Pages/UserPool")
);

const userPool = () => {
  return <UserPoolComponent />;
};
userPool.auth = true;
userPool.getLayout = adminLayout;
export default userPool;
