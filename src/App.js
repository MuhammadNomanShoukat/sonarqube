
import { HashRouter, Routes, Route } from "react-router-dom"

import BaseLayout from "./common/base-layout/base-layout.component";
import Home from "./pages/home.component";
import About from "./pages/About/about.component";
import ContactUs from "./pages/contact-us/contact-us.componenet";
import Faq from "./pages/faq/faq.component";
import HowToStart from "./pages/how-to-start/how-to-start.component";
import Services from "./pages/services/services.component";
import Shippers from "./pages/shippers/shippers.component";
import TruckTypes from "./pages/truck-types/truck-types.component";
import NotFound from "./pages/404.component";

import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes basename="/smlogistics">
        <Route path="/" element={<BaseLayout><Home /></BaseLayout>} />
        <Route path="/about" element={<BaseLayout><About /></BaseLayout>} />
        <Route path="/services" element={<BaseLayout><Services /></BaseLayout>} />
        <Route path="/truck-types" element={<BaseLayout><TruckTypes /></BaseLayout>} />
        <Route path="/how-to-start" element={<BaseLayout><HowToStart /></BaseLayout>} />
        <Route path="/shippers" element={<BaseLayout><Shippers /></BaseLayout>} />
        <Route path="/faq" element={<BaseLayout><Faq /></BaseLayout>} />
        <Route path="/contact-us" element={<BaseLayout><ContactUs /></BaseLayout>} />
        <Route path="*" element={<BaseLayout><NotFound /></BaseLayout>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
