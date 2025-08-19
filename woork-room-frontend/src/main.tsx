import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { routes } from "./routes";
import Provider from "./providers/provider";

createRoot(document.getElementById("root")!).render(
  <Provider>
    <RouterProvider router={routes} />
  </Provider>
);

