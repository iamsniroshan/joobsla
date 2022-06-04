
import { userLayout } from "components/web/Layout";
import dynamic from "next/dynamic";


const PostViewComponent = dynamic(() => import("components/web/Post/View"));

const PostView = () => {
  return <PostViewComponent/>
}
  PostView.auth = true;
  PostView.getLayout = userLayout

export default PostView;