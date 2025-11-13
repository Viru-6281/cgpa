import { HomePage, CGPAPage, AttendancePage } from "./routes.jsx";

/**
 * Route definitions for the application
 */
export const routes = [
  {
    path: "/",
    element: <HomePage />,
    label: "Home",
  },
  {
    path: "/cgpa",
    element: <CGPAPage />,
    label: "CGPA Calculator",
  },
  {
    path: "/attendance",
    element: <AttendancePage />,
    label: "Attendance",
  },
];
