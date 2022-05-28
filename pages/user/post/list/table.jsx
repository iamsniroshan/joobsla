import { userLayout } from "components/web/Layout";
import dynamic from "next/dynamic";

const PostTableListComponent = dynamic(() => import("components/web/Post/tablelist"));

const TableList = () => {
  return <PostTableListComponent/>
};

PostTableListComponent.auth = true;
PostTableListComponent.getLayout = userLayout


export default TableList;