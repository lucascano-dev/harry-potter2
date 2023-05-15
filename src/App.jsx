import "./App.css";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import About from "./pages/About/About";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
