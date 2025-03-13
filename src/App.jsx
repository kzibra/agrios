import { Routes, Route, useLocation } from "react-router-dom";
import HomeNav from "./components/HomeNav";
import Header from "./components/Header";
import PageHeader from "./components/PageHeader";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="min-h-screen">
      {isHomePage ? <HomeNav /> : <Header />}
      
      {!isHomePage && <PageHeader />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
