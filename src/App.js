import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ScrollToTop from "./components/ScrollToTop";

import Layout from "./components/Layout";
import HomePage from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Blogs from "./components/Blogs";
import PrivacyPolicy from "./components/PrivacyPolicy";
import AdminCreateBlog from "./components/AdminCreateBlog";

import ConsultationModal from "./components/ConsultationModal";
import { ConsultationProvider } from "./components/context/ConsultationContext";

// Services
import InteriorDesign from "./components/Services/InteriorDesign";
import HomePlans from "./components/Services/HomePlans";
import Visualization3D from "./components/Services/Visualization3D";
import Landscaping from "./components/Services/Landscaping";
import HomeAutomation from "./components/Services/HomeAutomation";
import CurtainsBlinds from "./components/Services/CurtainsBlinds";
import ChimneysHobs from "./components/Services/ChimneysHobs";
import ResidentialInteriors from "./components/Services/ResidentialInteriors";
import CommercialInteriors from "./components/Services/CommercialInteriors";
import InteriorStyling from "./components/Services/InteriorStyling";
import LuxuryVillaDesign from "./components/Services/LuxuryVillaDesign";
import SpacePlanning from "./components/Services/SpacePlanning";

import OurProjects from "./components/OurProjects";
import ProjectPDFView from "./components/ProjectPDFView";
import GalleryPage from "./components/GalleryPage";
import ModularFactory from "./components/ModularFactory";
import TermsConditions from "./components/TermsConditions";

const App = () => {
  return (
    <ConsultationProvider>
      <BrowserRouter>

        <ScrollToTop />

        <ToastContainer
          position="top-center"
          pauseOnHover={false}
        />

        <Routes>

          {/* ========================================
                        ALL NORMAL WEBSITE PAGES
                    ======================================== */}
          <Route element={<Layout />}>

            {/* Main Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/projects" element={<OurProjects />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />

            <Route
              path="/modular-factory"
              element={<ModularFactory />}
            />

            <Route
              path="/admin/create-blog"
              element={<AdminCreateBlog />}
            />

            {/* Services */}
            <Route
              path="/services/interior-design"
              element={<InteriorDesign />}
            />

            <Route
              path="/services/home-plans"
              element={<HomePlans />}
            />

            <Route
              path="/services/3d-visualization"
              element={<Visualization3D />}
            />

            <Route
              path="/services/landscaping"
              element={<Landscaping />}
            />

            <Route
              path="/services/home-automation"
              element={<HomeAutomation />}
            />

            <Route
              path="/services/curtains-blinds"
              element={<CurtainsBlinds />}
            />

            <Route
              path="/services/chimneys-hobs"
              element={<ChimneysHobs />}
            />

            <Route
              path="/services/residential"
              element={<ResidentialInteriors />}
            />

            <Route
              path="/services/commercial"
              element={<CommercialInteriors />}
            />

            <Route
              path="/services/styling"
              element={<InteriorStyling />}
            />

            <Route
              path="/services/luxury-villas"
              element={<LuxuryVillaDesign />}
            />

            <Route
              path="/services/space-planning"
              element={<SpacePlanning />}
            />

          </Route>

          <Route
            path="/project/:id"
            element={<ProjectPDFView />}
          />

        </Routes>

        {/* Global Modal */}
        <ConsultationModal />

      </BrowserRouter>
    </ConsultationProvider>
  );
};

export default App;