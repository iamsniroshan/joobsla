
import { userLayout } from "components/web/Layout";
import dynamic from "next/dynamic";


const KanbanBoardComponent = dynamic(() => import("components/web/Application/KanbanBoard"));

const Application = () => {
  return <KanbanBoardComponent/>
};

Application.auth = true;
Application.getLayout = userLayout
export default Application;