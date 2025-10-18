import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
        children: [
            { path: "/", Component: Home },
            { path: "/contact", Component: Contact },
        ],
  },
]);

export default router;
