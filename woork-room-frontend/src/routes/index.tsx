import { createBrowserRouter } from "react-router-dom";
import AppWrapperLayout from "../layouts/AppWrapperLayout";
import RootLayout from "../layouts/RootLayout";
import DashboardPage from "../pages/DashboardPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import { SIgnUpSuccess } from "../pages/SignUpSuccess";
import NearestEventsPage from "../pages/NearestEventsPage";
import VacationsCalendar from "../components/VacationsCalendar";
import ProfilPage from "../pages/Profil";
import ProtectedRouteComponent from "../components/protected.route";
import ProfilControl from "../components/ProfilControl";
import { Settings } from "lucide-react";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppWrapperLayout />,
    children: [
      {
        element: (
            <RootLayout />
        ),
        children: [
          {
            index: true,
            element: <DashboardPage />,
          },
          {
            path: "/nearest-events",
            element: <NearestEventsPage />,
          },
          {
            path: "/vacations/calendar",
            element: <VacationsCalendar />,
          },
          {
            path: "/my-profil",
            element: <ProfilPage />,
          },
          {
            path: "/profil-control",
            element: <ProfilControl />,
          },
          {
            path: "/settings",
            element: <Settings />,
          },
        ],
      },
      {
        path: "sign-in",
        element: <SignInPage />,
      },
      {
        path: "sign-up",
        element: <SignUpPage />,
      },
      {
        path: "sign-up/success",
        element: <SIgnUpSuccess />,
      },
    ],
  },
]);
