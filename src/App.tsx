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

          {/* Auth pages without Layout */}
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
