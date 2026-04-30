import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Layout from "./components/Layout";
import HomePage from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Blogs from "./components/Blogs";
import Residential from "./components/services/Residential";

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer position="top-center" pauseOnHover={false} />

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blogs" element={<Blogs />} />

          <Route path="/services/residential" element={<Residential />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
