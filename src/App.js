import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import useDarkMode from "./Hooks/useDarkMode";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Project from "./pages/Project";
import ProjectDetails from "./pages/ProjectDetails";
// import Services from "./pages/Services";
import Blog from "./pages/Blog";

function App() {
  useDarkMode();
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <AboutMe />
              {/* <Services /> */}
              <Project />
              <Blog />
              <Contact />
            </>
          }
        />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </div>
  );
}

export default App;
