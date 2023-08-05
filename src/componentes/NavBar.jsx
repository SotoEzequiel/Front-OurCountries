import React from "react";
import { Link } from "react-router-dom";
import Style from "../style/navBar.module.css"
import CountriesImg from "../images/countries.png"
export default function NavBar() {
    return (
        <div className={Style.nav}>
            <div className={Style.imgContainer}>
                <img className={Style.img} src={CountriesImg} alt="" />
            </div>
            <div className={Style.menu}>
                <Link to="/home" className={Style.p}>
                    Home
                </Link>
                <Link to="/creation" className={Style.p}>
                    Create Activity
                </Link>
            </div>
            <div className={Style.about}>
                <a target="_blank" href="https://www.linkedin.com/in/ezequiel-soto/">About Me</a>
            </div>

        </div>
    )
}