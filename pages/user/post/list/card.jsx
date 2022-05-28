
import { userLayout } from "components/web/Layout";
import dynamic from "next/dynamic";


const PostCardListComponent = dynamic(() => import("components/web/Post/cardlist"));

const CardList = () => {
  return <PostCardListComponent/>
};


PostCardListComponent.auth = true;
PostCardListComponent.getLayout = userLayout


export default CardList;