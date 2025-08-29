// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import your page components
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Diagnostics from "./pages/Diagnostics";
import Contact from "./pages/Contact";
//import AdminAppointments from "./pages/AdminAppointments";

// Import your layout wrapper
import Shell from "./components/Shell";

// ---------- ROUTER ----------
function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/services/diagnostics" element={<Diagnostics />} />
      <Route path="/contact" element={<Contact />} />
      {/* Hidden admin route for demo */}
      <Route path="/admin" element={<AdminAppointments />} />
    </Routes>
  );
}

// ---------- ROOT APP ----------
export default function App() {
  return (
    <BrowserRouter>
      <Shell>
        <AppRouter />
      </Shell>
    </BrowserRouter>
  );
}
