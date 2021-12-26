import React, {useState}from "react";
import {useHistory} from "react-router-dom";
import axios from 'axios';

export default function SignUp() {
    const history = useHistory()
    const [account, setAccount] = useState()
    const [emile, setEmile] = useState()
    const [description, setDescription] = useState()
    const [imageProfile, setImageProfile] = useState()
    const [password, setPassword] = useState()

    const changeName =(e)=>{
        setAccount(e.target.value)
    }

    const changeEmile =(e)=>{
        setEmile(e.target.value)
    }
    const chagedescription =(e)=>{
        setDescription(e.target.value)
        
    }

    const changeimg =(e)=>{
        setImageProfile(e.target.value)
    }
    const changPassword=(e)=>{
        setPassword(e.target.value)
    }
   const addUser =async() =>{
    const response =await axios.post("http://localhost:5000/signUp",{
        account:account,
        email:emile,
        description:description,
        imageProfile:imageProfile,
        password:password,
    }) ;
    if(response.status=== 201){
        history.push("/logIn")
    }
}
    
    return (
        <div className="sinUp">
           <input onChange={(e)=>{
               changeName(e);
           }}placeholder="enter Name" /> 

           <input onChange={(e)=>{
               changeEmile(e);
           }} placeholder="enter Emile"/>
            <input onChange={(e)=>{
                chagedescription(e);
            }}placeholder="enter description" />
            <input onChange={(e)=>{
                changeimg(e)
            }} placeholder="Enter Img Profile"/>
            <input onChange={(e)=>{
                changPassword(e)
            }}placeholder ="Enter Password" />
           <button onClick={()=>{
               addUser();
             
           }}>signUp</button>
        </div>
    )
}
