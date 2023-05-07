
import RightSideBar from 'components/common/Sidebar/rightsidebar';
import TopSideBar from 'components/common/Sidebar/topsidebar';
import { useRouter } from 'next/router'
import ExperienceFormComponent from '../Forms/ExperienceForm';
import UserInformationFormComponent from '../Forms/UserInformationForm';
import LoginComponent from '../Login'
import OverlayModalComponent from '../OverlayModal';
import PostAddComponent from '../Post/Add';
import PostViewComponent from '../Post/View';


export default function InjectorComponent() {

  const router = useRouter()
  const { openLoginModal, userInfoEditModal, openPostAddModal,experienceEditModal,openPostViewAndApply, viewType } = router.query
  //const [openLogin, setOpenLogin] = useAtom(openLoginAtom)

  return (
    <>
      <OverlayModalComponent open={openLoginModal} width="md:w-min">
        <LoginComponent />
      </OverlayModalComponent>
      <RightSideBar open={userInfoEditModal}>
        <UserInformationFormComponent />
      </RightSideBar>
      <RightSideBar open={experienceEditModal}>
        <ExperienceFormComponent/>
      </RightSideBar>
      <OverlayModalComponent open={openPostAddModal} width="md:max-w-7xl" title={viewType === 'create' ? 'Post New Job': viewType === 'edit' ? 'Edit Job post' : ''}>
        <PostAddComponent />
      </OverlayModalComponent>
      {/* <TopSideBar open={openPostAddModal} title={viewType === 'create' ? 'Post New Job': viewType === 'edit' ? 'Edit Job post' : ''}>
        <PostAddComponent />
      </TopSideBar> */}
      {/* Job post view and apply */}
      <TopSideBar open={openPostViewAndApply} title="Job Detail">
        <PostViewComponent />
      </TopSideBar>
    </>
  );
}
