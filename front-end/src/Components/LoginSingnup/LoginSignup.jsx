import React, { useState } from "react"; // Ajout de l'importation de useState
import './LoginSignup.css';
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const LoginSignup = () => {
    const [action, setAction] = useState("Log in"); // Déclaration de l'état directement dans le composant fonctionnel

    return (
        <div className="container">
            <div className="header"></div>
            <div className="text">{action}</div>
            <div className="underline"></div>
            <div className="inputs">
                {action === "Sign Up" && (
                    <div className="input">
                        <FaRegUser className="icon" />
                        <input type="text" placeholder="Username" />
                    </div>
                )}
                <div className="input">
                    <MdOutlineMail className="icon" />
                    <input type="email" placeholder="Email" />
                </div>
                <div className="input">
                    <RiLockPasswordLine className="icon" />
                    <input type="password" placeholder="Password" />
                </div>
            </div>
            {action === "Sign Up" ?<div></div>:<div className="forgot-password">Forgot Password? <span>Click here</span></div>}

                
            
            <div className="submit-container">
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => setAction("Sign Up")}>Sign up</div>
                <div className={action === "Log in" ? "submit gray" : "submit"} onClick={() => setAction("Log in")}>Login</div>
            </div>
        </div>
    );
}

export default LoginSignup;
