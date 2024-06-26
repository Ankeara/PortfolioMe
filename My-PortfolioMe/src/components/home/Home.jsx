import Social from "./socials";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import "./home.css";

const Home = () => {
  return (
    <div>
      <section className="home section" id="home">
        <div className="home_container container grid">
          <div className="home_content">
              <Social />
              <div className="home_img"></div>
              <Data />
          </div>
          <ScrollDown />
        </div>
      </section>
    </div>
  )
}

export default Home
