import { LayoutPropsType } from "@/definitions/types";
import { CopyrightBar, MainFooter, MainHeader } from "./_components";

function Layout({ children }: LayoutPropsType) {
  return (
    <div>
      <MainHeader />
      {children}
      <MainFooter />
      <CopyrightBar />
    </div>
  );
}

export default Layout;
