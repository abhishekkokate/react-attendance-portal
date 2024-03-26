import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./layouts/Navbar";
import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import { useLoading } from "./contexts/LoadingContext";
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
