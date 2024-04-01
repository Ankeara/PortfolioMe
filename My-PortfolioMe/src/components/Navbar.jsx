import {Link} from "react-router-dom";
// import {faFacebook,faYoutube} from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav() {
    return(
         <div className="flex items-center justify-between border-b py-3 ">
            <div className=" bg-slate-50 w-full space-x-3 flex items-center justify-between px-10 2xl:px-0 2xl:w-8/12 2xl:mx-auto">
                <div className="flex space-x-3 no-underline text-gray-500 font-medium text-sm sans-serif mr-2">
                    <Link to="/">Ankeara.dev</Link>
                </div>
                <div className="flex space-x-3 no-underline text-gray-500 font-medium text-sm sans-serif mr-2">
                    <Link to="/">Home</Link>
                    <Link to="#about">About as</Link>
                    <Link to="#contact">Contact</Link>
                </div>
            </div>
        </div>
    );
}

export default Nav;