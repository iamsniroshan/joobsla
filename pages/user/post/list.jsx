
import { userLayout } from "components/web/Layout";
import dynamic from "next/dynamic";


const PostComponent = dynamic(() => import("components/web/Post"));

const PostList = () => {
  return <PostComponent/>
};

PostList.auth = true;
PostList.getLayout = userLayout


export default PostList;