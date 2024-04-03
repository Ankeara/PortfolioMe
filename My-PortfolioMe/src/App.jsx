import "./App.css";
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import About from "./components/about/About";
import Skills from "./components/skills/Skill";
import Service from "./components/services/Services";
import Qualifacation from "./components/qualifacation/Qualifacation";
import Testimonials from "./components/testimonials/Testimonials";

function App() {

  return (
    <>
      <div>
        <Header />
        <Home />
        <About />
        <Skills />
        <Service />
        <Qualifacation />
        <Testimonials />
      </div>
    </>
  )
}

export default App
