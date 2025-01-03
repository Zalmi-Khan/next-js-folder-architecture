import { LayoutPropsType } from "@/definitions/types";
import { MainFooter, MainHeader } from "./_components";



function Layout({ children }: LayoutPropsType) {
  return (
    <div>
      <MainHeader />
      {children}
      <MainFooter />
    </div>
  );
}

export default Layout;
