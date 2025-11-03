import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";
import CategorieNews from "../components/CategorieNews";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { path: "/", Component: Home },
      { path: "/contact", Component: Contact },
      {
        path: "/categorie/:id",
        Component: CategorieNews ,
        loader: () => fetch('/news.json')
      },
    ],
  },
]);

export default router;
