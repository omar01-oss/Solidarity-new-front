import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import Professionals from "./pages/Professionals/Professionals";
import ProfessionalProfile from "./pages/ProfessionalProfile/ProfessionalsProfile";
import ErrorBoundary from "./pages/ProfessionalProfile/components/ErrorBoundary";
import BookingPage from './pages/Booking/BookingPage';
import ScrollToTop from './components/ScrollToTop';
import ActivitiesCenters from './pages/ActivitiesCenters/ActivitiesCenters';
import Community from "./pages/community/community";
import LoginForm from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import { DashboardPage } from "./dashboard";
import Galerie from "./pages/galerie/Galerie";

import ResetPasswordPage from "./pages/auth/ResetPasswordPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Pages with Layout */}
          <Route path="/" element={<Layout children={<Home />} />} />
          <Route path="/professionals" element={<Layout children={<Professionals />} />} />
          <Route path="/professionals/:id" element={<Layout children={<ProfessionalProfile />} />} />
          <Route path="/book/:therapistId" element={<Layout children={<BookingPage />} />} />
          <Route path="/activities-centers" element={<Layout children={<ActivitiesCenters />} />} />
          <Route path="/community" element={<Layout children={<Community />} />} />
          <Route path="/galerie" element={<Layout children={<Galerie />} /> } />
          <Route path="/contact" element={<Layout children={<ContactPage />} /> } />
          <Route path="/about" element={<Layout children={<AboutPage />} /> } />

          {/* Auth pages without Layout */}
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/resetpass" element={<ResetPasswordPage />} />
          <Route path="/forgetpass" element={<ForgotPasswordPage />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
