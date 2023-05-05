
import { userLayout } from "components/web/Layout";
import dynamic from "next/dynamic";


const KanbanBoardComponent = dynamic(() => import("components/web/JobProviderApplications/KanbanBoard"));

const Application = () => {
  return <KanbanBoardComponent/> // job provider kanban board
};

Application.auth = true;
Application.getLayout = userLayout
export default Application;