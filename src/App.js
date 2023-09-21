import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import ResponsiveAppBar from "./Components/ResponsiveAppBar";
import Contact from "./Components/Contact";
//import { Explore } from "@mui/icons-material";

function App() {
  return (
    <Router>
      <ResponsiveAppBar/>
      <Routes>
      <Route path="/" element={<Home />} />
       {/* <Route path="/explore" element={<Explore />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;