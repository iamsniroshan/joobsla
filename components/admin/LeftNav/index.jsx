import dynamic from "next/dynamic";


const MobileLeftNavComponent = dynamic(() => import("./MobileLeftNav"));
const DesktopLeftNavComponent = dynamic(() => import("./DesktopLeftNav"));

function LeftNavComponent() {
  return (
    <>
      <MobileLeftNavComponent />
      <DesktopLeftNavComponent />
    </>
  );
}

export default LeftNavComponent;
