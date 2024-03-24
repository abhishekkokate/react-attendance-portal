import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import NotFound from "./pages/NotFound";
import Calender from "./pages/Calender";
import Landing from "./pages/Landing";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="loader-container">
        <div className="loader"></div>
      </div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="//home/calender" element={<Calender />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default App;
