import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import "./Nav.css"
function Nave(){
    const [show, handleShow] = useState(false);

    const history = useHistory()

    const transitionNavBar=()=>{
      
        if(window.scrollY>100){
            handleShow(true)
        }else{
        handleShow(false)
        }
    };

    useEffect(()=>{
        window.addEventListener("scroll",
       transitionNavBar);
       return()=>window.removeEventListener("scroll" , transitionNavBar);
    }, [])
    console.log(show)
    return<div className={`nav ${show && "nav_black"}`}>
        <div className="nav_contents">
        <img
        onClick={()=>history.push("/")}
        className="nav_logo"
    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""/>
    <img
    onClick={()=>history.push("/profile")}
    className="nav_avatar"
 src="https://occ-0-4609-778.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41" 
 alt="profile user image"/>
    </div>
</div>
}
export default Nave