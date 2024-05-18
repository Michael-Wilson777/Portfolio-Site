import { Routes, Route } from "react-router-dom";
// import Header from "./components/Header/Header";
import Contact from "./pages/ContactPage/ContactMe";
import HomePage from "./pages/HomePage/HomePage";
import ResumePage from "./pages/ResumePage/ResumePage";
import ProjectsPage from "./pages/ProjectPage/ProjectsPage";
import AboutMe from "./pages/AboutMePage/AboutMe";
// import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
