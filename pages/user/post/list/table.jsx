import { userLayout } from "components/web/Layout";
import dynamic from "next/dynamic";

const PostTableListComponent = dynamic(() => import("components/web/Post/tablelist"));

const TableList = () => {
  return <PostTableListComponent/>
};

TableList.auth = true;
TableList.getLayout = userLayout


export default TableList;