import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/Home";
import { Learn } from "./pages/Learn";
import { Resources } from "./pages/Resources";
import { FQs } from "./pages/FQs";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
]);

export default routes;