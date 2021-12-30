import React,{useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';
// import Navbar from './Navbar';
// import "./App.css";



export default function Account({token}) {
    const [profileInfo, setProfileInfo] = useState([])
    const { id } = useParams();
    
    useEffect(() => {
        const getProfileData = async()=>{
            const result = await axios.get(`http://localhost:5000/profiles`);
            setProfileInfo(result.data)
        }

        getProfileData()
      }, []);

    return (
    
        <div className="account-page">
           {/* <Navbar/> */}
           
            <div className="account-container">
                {
                    profileInfo.map((elem,index)=>{
                        return <div key={index}>
                            <img className="profile-img" src={elem.imageProfile} />
                            <h3>{elem.account}</h3>
                            <p>{elem.description}</p>
                            <div>
                                <br />
                                <h4 className="liked">Liked :</h4>
                                <hr />
                                <p>{elem.favorite.map((elem,index)=>{
                                    return <div key={index}>
                                        <p className="text-profile">Ammmmmjaadd{elem.text}</p>
                                        <hr/>
                                    </div>
                                })}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
