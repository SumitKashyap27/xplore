import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import ResponsiveAppBar from "./Components/ResponsiveAppBar";
import Contact from "./Components/Contact";
//import { Explore } from "@mui/icons-material";
import About from "./Components/About";
import Gallery from "./Components/Gallery";

function App() {
  return (
    <Router>
      <ResponsiveAppBar/>
      <Routes path="*">
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
       <Route path="/gallery" element={<Gallery />} /> 
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;