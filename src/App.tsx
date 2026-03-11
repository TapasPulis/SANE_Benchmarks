import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/main.layout";
import HomePage from "./pages/home.page";
import AboutPage from "./pages/about.page";
import ContactPage from "./pages/contact.page";
import LoginPage from "./pages/login.page";
import ServicePage from "./pages/service.page";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/services" element={<ServicePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
