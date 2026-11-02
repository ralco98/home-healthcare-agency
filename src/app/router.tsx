import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import { HomePage } from "@/pages/HomePage";
import { CareServicesPage } from "@/pages/CareServicesPage";
import { AccommodationPage } from "@/pages/AccommodationPage";
import { LifeAtHomePage } from "@/pages/LifeAtHomePage";
import { AboutPage } from "@/pages/AboutPage";
import { TeamPage } from "@/pages/TeamPage";
import { FamiliesPage } from "@/pages/FamiliesPage";
import { AdmissionsPage } from "@/pages/AdmissionsPage";
import { ContactPage } from "@/pages/ContactPage";
import { CareersPage } from "@/pages/CareersPage";
import { PrivacyPage } from "@/pages/PrivacyPage";
import { AccessibilityPage } from "@/pages/AccessibilityPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "care-services", element: <CareServicesPage /> },
      { path: "accommodation", element: <AccommodationPage /> },
      { path: "life-here", element: <LifeAtHomePage /> },
      { path: "life-at-willowbrook", element: <LifeAtHomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "meet-the-team", element: <TeamPage /> },
      { path: "families", element: <FamiliesPage /> },
      { path: "admissions", element: <AdmissionsPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "careers", element: <CareersPage /> },
      { path: "privacy-policy", element: <PrivacyPage /> },
      { path: "accessibility", element: <AccessibilityPage /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);
