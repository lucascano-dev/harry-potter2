import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import About from "./pages/About/About";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
