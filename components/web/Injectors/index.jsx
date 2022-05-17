
import { useRouter } from 'next/router'
import UserInformationFormComponent from '../Forms/UserInformation';
import LoginComponent from '../Login'
import OverlayModalComponent from '../OverlayModal';
import PostAddComponent from '../Post/Add';
import SideOverComponent from '../SlideOver';


export default function InjectorComponent() {

  const router = useRouter()
  const { openLoginModal, userInfoEditModal, openPostAddModal } = router.query
  //const [openLogin, setOpenLogin] = useAtom(openLoginAtom)

  return (
    <>
      <OverlayModalComponent open={openLoginModal} width="md:w-min">
        <LoginComponent />
      </OverlayModalComponent>
      <SideOverComponent open={userInfoEditModal}>
        <UserInformationFormComponent />
      </SideOverComponent>
      <OverlayModalComponent open={openPostAddModal} width="md:max-w-7xl">
        <PostAddComponent />
      </OverlayModalComponent>
    </>
  );
}
