import "./service.css";
import { useState } from "react";

const Service = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) =>{
        setToggleState(index);
    }
  return (
    <section className="service section" id="service">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i offer</span>
        
        <div className="service_container container grid">
            <div className="service_content">
                <div>
                    <i className="uil uil-web-grid service_icon"></i>
                    <h3 className="service_title">Product <br/> Designer</h3>
                </div>

                <span className="service_button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right service_button-icon"></i></span>

                <div className={toggleState === 1 ? "service_model active-model" : "service_model"}>
                    <div className="service_model-content">

                        <i className="uil uil-times service_model-close" onClick={() => toggleTab(0)}></i>
                        <h3 className="service_model-title">Product <br/> Designer</h3>
                        <p className="service_model-des">Service with more than 3 years of experience.Providing quality work to clients and companies.
                        </p>
                        <ul className="service_model-services grid">
                            <li className="service_model-service">
                                <i className="uil uil-check-circle service_model-icon">
                                </i>
                                <p className="service_model-info">I develop the user interface.</p>
                            </li>
                            <li className="service_model-service">
                                <i className="uil uil-check-circle service_model-icon">
                                </i>
                                <p className="service_model-info">Web page development.</p>
                            </li>
                            <li className="service_model-service">
                                <i className="uil uil-check-circle service_model-icon">
                                </i>
                                <p className="service_model-info">I create ux element interactions.</p>
                            </li>
                            <li className="service_model-service">
                                <i className="uil uil-check-circle service_model-icon">
                                </i>
                                <p className="service_model-info">I position your company brand.</p>
                            </li>
                            <li className="service_model-service">
                                <i className="uil uil-check-circle service_model-icon">
                                </i>
                                <p className="service_model-info">Design and mockups of products for companies.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="service_content">
                <div>
                    <i className="uil uil-arrow service_icon"></i>
                    <h3 className="service_title">Ui/Ux <br /> Designer </h3>
                </div>

                <span className="service_button" onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right service_button-icon"></i></span>

                <div className={toggleState === 2 ? "service_model active-model" : "service_model"}>
                    <div className="service_model-content">

                        <i className="uil uil-times service_model-close" onClick={() => toggleTab(0)}></i>
                        <h3 className="service_model-title">Ui/Ux <br /> Designer </h3>
                        <p className="service_model-des">Service with more than 3 years of experience.Providing quality work to clients and companies.
                        </p>
                        <ul className="service_model-services grid">
                            <li className="service_model-service">
                                <i className="uil uil-check-circle service_model-icon">
                                </i>
                                <p className="service_model-info">I develop the user interface.</p>
                            </li>
                            <li className="service_model-service">
                                <i className="uil uil-check-circle service_model-icon">
                                </i>
                                <p className="service_model-info">Web page development.</p>
                            </li>
                            <li className="service_model-service">
                                <i className="uil uil-check-circle service_model-icon">
                                </i>
                                <p className="service_model-info">I create ux element interactions.</p>
                            </li>
                            <li className="service_model-service">
                                <i className="uil uil-check-circle service_model-icon">
                                </i>
                                <p className="service_model-info">I position your company brand.</p>
                            </li>
                            <li className="service_model-service">
                                <i className="uil uil-check-circle service_model-icon">
                                </i>
                                <p className="service_model-info">Design and mockups of products for companies.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="service_content">
                <div>
                    <i className="uil uil-edit service_icon"></i>
                    <h3 className="service_title">Visual <br /> Designer</h3>
                </div>

                <span className="service_button" onClick={() => toggleTab(3)}>View More <i className="uil uil-arrow-right service_button-icon"></i></span>

                <div className={toggleState === 3 ? "service_model active-model" : "service_model"}>
                    <div className="service_model-content">

                        <i className="uil uil-times service_model-close" onClick={() => toggleTab(0)}></i>
                        <h3 className="service_model-title">Visual <br /> Designer</h3>
                        <p className="service_model-des">Service with more than 3 years of experience.Providing quality work to clients and companies.
                        </p>
                        <ul className="service_model-services grid">
                            <li className="service_model-service">
                                <i className="uil uil-check-circle service_model-icon">
                                </i>
                                <p className="service_model-info">I develop the user interface.</p>
                            </li>
                            <li className="service_model-service">
                                <i className="uil uil-check-circle service_model-icon">
                                </i>
                                <p className="service_model-info">Web page development.</p>
                            </li>
                            <li className="service_model-service">
                                <i className="uil uil-check-circle service_model-icon">
                                </i>
                                <p className="service_model-info">I create ux element interactions.</p>
                            </li>
                            <li className="service_model-service">
                                <i className="uil uil-check-circle service_model-icon">
                                </i>
                                <p className="service_model-info">I position your company brand.</p>
                            </li>
                            <li className="service_model-service">
                                <i className="uil uil-check-circle service_model-icon">
                                </i>
                                <p className="service_model-info">Design and mockups of products for companies.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section >
  )
}

export default Service
