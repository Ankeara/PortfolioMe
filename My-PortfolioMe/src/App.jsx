import Header from "./components/header/Header"
import Home from "./components/home/Home"
import About from "./components/about/About";
import "./App.css";
import Skills from "./components/skills/Skill";

function App() {

  return (
    <>
      <div>
        <Header />
        <Home />
        <About />
        <Skills />
      </div>
    </>
  )
}

export default App
