
import { userLayout } from "components/web/Layout";
import OverlayModalComponent from "components/web/OverlayModal";

import dynamic from "next/dynamic";


const PostDetailsComponent = dynamic(() => import("components/web/Post/Detail"));

const PostDetail = () => {
  return <OverlayModalComponent><PostDetailsComponent/></OverlayModalComponent>
};

PostDetail.auth = true;
PostDetail.getLayout = userLayout


export default PostDetail;