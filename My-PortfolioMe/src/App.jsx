import Header from "./components/header/Header"
import Home from "./components/home/Home"
import About from "./components/about/About";
import "./App.css";
import Skills from "./components/skills/Skill";
import Service from "./components/services/Services";
import Qualifacation from "./components/qualifacation/Qualifacation";

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
      </div>
    </>
  )
}

export default App
