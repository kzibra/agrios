import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import PageHeader from "./components/PageHeader";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Services from './pages/Services';
import Projects from './pages/Projects';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="min-h-screen">
      {/* Контейнер для Header и контента страницы с фоновой картинкой только на Home */}
      <div
        className="relative"
        style={
          isHomePage
            ? {
                backgroundImage: "url('/src/assets/home/hero.bg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh", 
              }
            : {}
        }
      >
        {/* Затемнение фона только на Home */}
        {isHomePage && (
          <div className="absolute inset-0 bg-black opacity-20 z-0"></div>
        )}

        {/* Header с прозрачным фоном на Home */}
        <Header
          showNavigation={!isHomePage}
          transparentBackground={isHomePage}
        />

        {/* PageHeader для остальных страниц */}
        {!isHomePage && <PageHeader />}

        {/* Контент страниц */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;