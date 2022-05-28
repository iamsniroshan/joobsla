
import { userLayout } from "components/web/Layout";

import dynamic from "next/dynamic";


const PostDetailsComponent = dynamic(() => import("components/web/Post/Detail"));

const PostDetail = () => {
  return <PostDetailsComponent/>
};

PostDetail.auth = true;
PostDetail.getLayout = userLayout


export default PostDetail;