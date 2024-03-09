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
import AboutMe from "./components/aboutMe";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/About" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
