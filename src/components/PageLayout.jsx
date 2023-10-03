import { Outlet } from "react-router-dom";
import SiteNav from "./SiteNav";

function PageLayout() {
  return (
    <>
      <header>
        <SiteNav />
      </header>
      <main>
        <Outlet/>
      </main>
      <footer></footer>
    </>
  )
}

export default PageLayout;
