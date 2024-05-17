import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ContactPage from "./pages/ContactPage/ContactMe";
import HomePage from "./pages/HomePage/HomePage";
import ResumePage from "./components/pages/ResumePage";
import ProjectsPage from "../pages/ProjectsPage";
import AboutMePage from "./pages/AboutMePage/AboutMe";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="resume" element={<ResumePage />} />
        <Route path="about" element={<AboutMePage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
