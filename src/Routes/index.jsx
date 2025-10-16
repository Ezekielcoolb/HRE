import React, { lazy, Suspense, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import General from "../Layouts/general";
import TopLoader from "../Preload/TopLoad";





// Guest pages
const Home = lazy(() => import("../GuestPages/Home"));
const About = lazy(() => import("../GuestPages/About"));
const Programs = lazy(() => import("../GuestPages/Program"));
const ProgramDetails = lazy(() => import("../GuestPages/ProgramDetails"));
const Publications = lazy(() => import("../GuestPages/Publications"));
const PublicationDetails = lazy(() => import("../GuestPages/PublicationDetails"));
const Projects = lazy(() => import("../GuestPages/Projects"));
const ProjectDetails = lazy(() => import("../GuestPages/ProjectDetails"));
const Partners = lazy(() => import("../GuestPages/Partners"));
const Donate = lazy(() => import("../GuestPages/Donate"));
const Volunteer = lazy(() => import("../GuestPages/Volunteer"));
const Gallery = lazy(() => import("../GuestPages/Gallery"));
const Contact = lazy(() => import("../GuestPages/Contact"));
export default function Routers() {
  

  return (
    <Suspense fallback={<TopLoader />}>
      {useRoutes([
        {
          path: "/",
          element: <General />,
          children: [
         
            { path: "/", element: <Home /> },
            { path: "/about", element: <About /> },
            { path: "/programs", element: <Programs /> },
             { path: "/programs/details", element: <ProgramDetails /> },
            { path: "/publications", element: <Publications /> },
             { path: "/projects", element: <Projects /> },
             { path: "/partners", element: <Partners /> },
             { path: "/donate", element: <Donate /> },
             { path: "/volunteer", element: <Volunteer /> },
             { path: "/gallery", element: <Gallery /> },
             { path: "/contact", element: <Contact /> },
             { path: "/projects/details", element: <ProjectDetails /> },
            { path: "/publications/details", element: <PublicationDetails /> },
          ],
        },
        
      ])}
    </Suspense>
  );
}
