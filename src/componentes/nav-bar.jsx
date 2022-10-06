import React from "react";
import {Link} from "react-router-dom";
import Style from "../style/navBar.module.css"

export default function NavBar(){
return(
    <div className={Style.nav}>
                    <img className={Style.imagen}src="https://i.pinimg.com/originals/2c/9f/12/2c9f1211dab6d654a65f733664bde5f4.png" alt="" srcset="" />
                    <div className={Style.link}>
                        <Link to="/home" className={Style.p}>
                            Home
                            </Link>
                    <Link to="/creation" className={Style.p}>
                            Create Activity
                        </Link>

                    </div>
                    
                   
            </div>
)
}