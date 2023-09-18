import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import ResponsiveAppBar from "./Components/ResponsiveAppBar";

function App() {
  return (
    <Router>
      <ResponsiveAppBar/>
      <Routes>
        <Route path="/" element={<Home />}/>

      </Routes>
    </Router>
  );
}

export default App;