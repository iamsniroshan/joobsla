import HeaderComponent from "../Header";
import LeftNavComponent from "../LeftNav";

export default function NestedLayoutComponent({ children }) {
  return (
    <>
      <div className="relative h-screen flex overflow-hidden bg-white">
        {/* Static sidebar for desktop and mobile */}
        <LeftNavComponent />
        {/* Main column */}
        <div className="flex flex-col w-0 flex-1 overflow-hidden">
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
            <HeaderComponent/>
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
