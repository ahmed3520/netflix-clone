import React from 'react'
import './ProfileScreen.css'
import {selectUser} from '../features/userSlice'
import Nave from '../Nav'
import { useSelector } from 'react-redux'
import { auth } from '../firebase'

function ProfileScreen(){
    const user = useSelector(selectUser)
    return(
        <div className="profileScreen">
            <Nave/>
            <div className="profileScreen_body">
            <h1>Edit Profile</h1>
            <div className="profileScreen_info">
                <img src="https://occ-0-4609-778.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41" alt=""/>
                <div className="profileScreen_details">
                    <h2>{user.email}</h2>
                    <div className="profileScreen_plans">
                        <h3>Plans</h3>
                        <button className="profileScreen_signOut"
                        onClick={()=>auth.signOut()}
                        >Sign Out</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default ProfileScreen;