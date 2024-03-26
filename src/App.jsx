import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home"; // `../src/` added because vercel was not able to relove paths when `./` was used
import Navbar from "../srclayouts/Navbar";
import NotFound from "../srcpages/NotFound";
import Landing from "../srcpages/Landing";
import Login from "../srcpages/Login";
import { useLoading } from "../srccontexts/LoadingContext";
import { ToastContainer } from "react-toastify";

const App = () => {
  const { isLoading } = useLoading();
  return (
    <>
      <ToastContainer
        pauseOnHover
        theme="colored"
        closeOnClick
        autoClose={3000}
        hideProgressBar={false}
      />
      <Navbar />
      {isLoading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
