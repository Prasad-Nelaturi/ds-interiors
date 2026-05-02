import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Layout from "./components/Layout";
import HomePage from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Blogs from "./components/Blogs";
import Residential from "./components/services/Residential";
import AdminCreateBlog from "./components/AdminCreateBlog";

import ConsultationModal from "./components/ConsultationModal";
import { ConsultationProvider } from "./components/context/ConsultationContext";

const App = () => {
  return (
    <ConsultationProvider>
      <BrowserRouter>
        <ToastContainer position="top-center" pauseOnHover={false} />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/services/residential" element={<Residential />} />
            <Route path="/admin/create-blog" element={<AdminCreateBlog />} />
          </Route>
        </Routes>
        {/* Modal is placed outside Routes so it's available globally */}
        <ConsultationModal />
      </BrowserRouter>
    </ConsultationProvider>
  );
};

export default App;
