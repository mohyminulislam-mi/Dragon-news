import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import LeftAside from "../pages/asideBar/LeftAside";
import RightAside from "../pages/asideBar/RightAside";

const MainLayout = () => {
  return (
    <div>
      {/* header start */}
      <header>
        <Header></Header>
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>
      {/* body content start */}
      <main className="w-11/12 m-auto grid grid-cols-12 gap-5">
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
      {/* footer start */}
      {/* <footer>
        <Footer></Footer>
      </footer> */}
    </div>
  );
};

export default MainLayout;
