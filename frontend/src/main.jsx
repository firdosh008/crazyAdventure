import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { TrekProvider } from "./Context/SelectedServiceContext.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google"; // Import GoogleOAuthProvider

const router = createBrowserRouter([
  { path: "*", Component: App, errorElement: <p>Error</p> },
]);
//{localStorage.removeItem("auth_token");}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Wrap with GoogleOAuthProvider and provide your Google Client ID */}
    <GoogleOAuthProvider clientId="779348613946-bbni9alv2p0sv6urmpil72snkub39e8i.apps.googleusercontent.com">
      <TrekProvider>
        <RouterProvider router={router} />
      </TrekProvider>
    </GoogleOAuthProvider>
  </StrictMode>
);
