import "./app.scss";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/homePage";
import Contact from "./components/contact";
import Projects from "./components/Projects";
import NCNews from "./components/projects/NCNews";
import Tipper from "./components/projects/Tipper";
import Skills from "./components/skills";
import ContactPage from "./components/contactPage";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Projects/NCNews" element={<NCNews />} />
        <Route path="/Projects/Tipper" element={<Tipper />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contactPage" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
