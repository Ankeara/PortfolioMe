import "./qualifacation.css";
import { useState } from "react";

const Qualifacation = () => {
    const [toggleState, setToggleState] = useState(2);

    const toggleTab = (index) =>{
        setToggleState(index);
    }
  return (
    <section className="qualifacation section">
        <h2 className="section__title">Qualifacation</h2>
        <span className="section__subtitle">My person journey</span>

        <div className="qualication_container container">
            <div className="qualifacation_tabs">
                <div className={toggleState === 1 ? "qualifacation_button qualifacation_active button--flex" : "qualifacation_button button--flex"} onClick={() => toggleTab(1) }>
                    <i className="uil uil-graduation-cap qualifacation_icon q"></i> Education
                </div>
                <div className={toggleState === 2 ? "qualifacation_button qualifacation_active button--flex" : "qualifacation_button button--flex"} onClick={() => toggleTab(2) }>
                    <i className="uil uil-briefcase-alt qualifacation_icon"></i> Experience
                </div>
            </div>

            <div className="qualifacation_sections">
                <div className={toggleState === 1 ? "qualifacation_content qualifacation_content-active" : "qualifacation_content"}>
                    <div className="qualifacation_data">
                        <div>
                            <h3 className="qualifacation_title">Web Design</h3>
                            <span className="qualifacation_subtitle">hehehe</span>
                            <div className="qualifaction_calender">
                                <i className="uil uil-calendar-alt"></i>2022 - Present
                            </div>   
                        </div>

                        <div>
                            <span className="qualifacation_rounder"></span>
                            <span className="qualifacation_line"></span>
                        </div>
                    </div>

                    <div className="qualifacation_data">

                        <div></div>                

                        <div>
                            <span className="qualifacation_rounder"></span>
                            <span className="qualifacation_line"></span>
                        </div>
                        <div>
                            <h3 className="qualifacation_title">Web Development</h3>
                            <span className="qualifacation_subtitle">heheheh</span>
                            <div className="qualifaction_calender">
                                <i className="uil uil-calendar-alt"></i>2022 - Present
                            </div>
                        </div>
                    </div>

                    <div className="qualifacation_data">

                        <div>
                            <h3 className="qualifacation_title">Art director</h3>
                            <span className="qualifacation_subtitle">heheheh</span>
                            <div className="qualifaction_calender">
                                <i className="uil uil-calendar-alt"></i>2022 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualifacation_rounder"></span>
                            <span className="qualifacation_line"></span>
                        </div>

                        <div></div>                
                    </div>
                </div>

                <div className={toggleState === 2 ? "qualifacation_content qualifacation_content-active" : "qualifacation_content"}>
                    <div className="qualifacation_data">
                        <div>
                            <h3 className="qualifacation_title">Web Desigfdgdfggn</h3>
                            <span className="qualifacation_subtitle">hehehe</span>
                            <div className="qualifaction_calender">
                                <i className="uil uil-calendar-alt"></i>2022 - Present
                            </div>   
                        </div>

                        <div>
                            <span className="qualifacation_rounder"></span>
                            <span className="qualifacation_line"></span>
                        </div>
                    </div>

                    <div className="qualifacation_data">

                        <div></div>                

                        <div>
                            <span className="qualifacation_rounder"></span>
                            <span className="qualifacation_line"></span>
                        </div>
                        <div>
                            <h3 className="qualifacation_title">Web Development</h3>
                            <span className="qualifacation_subtitle">heheheh</span>
                            <div className="qualifaction_calender">
                                <i className="uil uil-calendar-alt"></i>2022 - Present
                            </div>
                        </div>
                    </div>

                    <div className="qualifacation_data">
                        <div>
                            <h3 className="qualifacation_title">Art director</h3>
                            <span className="qualifacation_subtitle">heheheh</span>
                            <div className="qualifaction_calender">
                                <i className="uil uil-calendar-alt"></i>2022 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualifacation_rounder"></span>
                            <span className="qualifacation_line"></span>
                        </div>
                        <div></div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualifacation
