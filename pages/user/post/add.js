import { userLayout } from "components/web/Layout";
import dynamic from "next/dynamic";

const PostAddComponent = dynamic(() => import("components/web/Post/Add"));

const PostAdd = () => {
  return <PostAddComponent />;
};

PostAdd.auth = true;
PostAdd.getLayout = userLayout;

export default PostAdd;
