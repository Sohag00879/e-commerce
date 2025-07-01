import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/navbar/Navbar";

function App() {

  return (
    <div>
      <Navbar />
      <Outlet />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        pauseOnHover
        draggable
        theme="colored"
        toastClassName="custom-toast"
      />
      <Footer />
    </div>
  )
}

export default App
