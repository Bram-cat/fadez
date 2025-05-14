import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import Home from "./components/home/home";
import About from "./components/about/about";
import Services from "./components/services/services";
import Contact from "./components/contact/contact";
import ScrollToTop from "./components/common/scrollToTop";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <ScrollToTop />
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<div>Page not found</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
