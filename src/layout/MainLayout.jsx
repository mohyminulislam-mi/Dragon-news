import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
