import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/global/Home";
import About from "../components/global/About";
import Portfolios from "../components/global/Portfolios";
import Services from "../components/global/Services";
import App from "../App";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/portfolios" element={<Portfolios />} />
        <Route path="/service" element={<Services />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
