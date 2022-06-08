import { adminLayout } from "components/admin/Layout";
import dynamic from "next/dynamic";


const UserPoolComponent = dynamic(() =>
  import("components/admin/Pages/UserPool")
);

const userPool = () => {
  return <UserPoolComponent />;
};
userPool.auth = true;
userPool.getLayout = adminLayout;
export default userPool;
