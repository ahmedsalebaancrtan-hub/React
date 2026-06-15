import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/Home";
import { Learn } from "./pages/Learn";
import { Resources } from "./pages/Resources";
import { FQs } from "./pages/FQs";
import { MainPage } from "./pages";
import Cart from "./pages/Cart";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,

 children : [
  {
    index : true,
    element : <Home/>
  },
   {
    path: "/learn",
    element: <Learn />,
  },
  {
    path: "/resources",
    element: <Resources />,
  },
  {
    path: "/fQs",
    element: <FQs />,
  },
  {
    path: "/cart",
    element: <Cart />,
  }
 ]
}
]);

export default routes;