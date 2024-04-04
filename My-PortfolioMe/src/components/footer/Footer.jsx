import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">Ankeara.Dev</h1>
            <ul className="footer_list">
                <li>
                    <a href="" className="footer_link">About</a>
                </li>
                <li>
                    <a href="" className="footer_link">Project</a>
                </li>
                <li>
                    <a href="" className="footer_link">Testimonials</a>
                </li>
            </ul>
            <div className="footer_social">
                <a href="" className="footer_social-link" target="_blank">
                    <i className="uil uil-facebook"></i>
                </a>
                <a href="" className="footer_social-link" target="_blank">
                    <i className="uil uil-dribbble"></i>
                </a>
                <a href="" className="footer_social-link" target="_blank">
                    <i className="uil uil-github"></i>
                </a>
            </div>

            <span className="footer_copy">&#169; Ankeara.Dev. All rigths reserved</span>
        </div>
    </footer>
  )
}

export default Footer
