import "./App.css";
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import About from "./components/about/About";
import Skills from "./components/skills/Skill";
import Service from "./components/services/Services";
import Qualifacation from "./components/qualifacation/Qualifacation";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Scrollup from "./components/scrollup/Scrollup";

function App() {

  return (
    <>
      <div>
        <Header />
          <main>
            <Home />
            <About />
            <Skills />
            <Service />
            <Qualifacation />
            <Testimonials />
            <Contact />
          </main>
        <Footer />
        <Scrollup />
      </div>
    </>
  )
}

export default App
