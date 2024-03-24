import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Layouts/Navbar";
import Footer from "./Layouts/Footer";
import NotFound from "./Pages/NotFound";
import Calender from "./Pages/Calender";
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";

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
