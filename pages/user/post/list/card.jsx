
import { userLayout } from "components/web/Layout";
import dynamic from "next/dynamic";


const PostCardListComponent = dynamic(() => import("components/web/Post/cardlist"));

const CardList = () => {
  return <PostCardListComponent/>
};


CardList.auth = true;
CardList.getLayout = userLayout


export default CardList;