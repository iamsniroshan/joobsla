import HeaderComponent from "../Header";

export default function NestedLayoutComponent({ children }) {
  return (
    <>
    <div className="relative min-h-screen bg-grayBg">
    <HeaderComponent/>
       {children}
       </div>
    </>
  );
}
