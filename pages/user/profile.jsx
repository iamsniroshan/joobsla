
import { userLayout } from "components/web/Layout";
import dynamic from "next/dynamic";



const ProfileComponent = dynamic(() => import("components/web/Profile"));

const Profile = () => {
  return <ProfileComponent/>
};

Profile.auth = true;
Profile.getLayout = userLayout

export default Profile;