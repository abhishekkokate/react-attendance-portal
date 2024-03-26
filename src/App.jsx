import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Navbar from "./layouts/Navbar.jsx";
import NotFound from "./pages/NotFound.jsx";
import Landing from "./pages/Landing.jsx";
import Login from "./pages/Login.jsx";
import { useLoading } from "./contexts/LoadingContext.jsx";
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
