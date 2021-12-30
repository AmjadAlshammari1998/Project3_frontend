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
            <br></br>
           <input onChange={(e)=>{
               changeEmile(e);
           }} placeholder="enter Emile"/>
           <br></br>
            <input onChange={(e)=>{
                chagedescription(e);
            }}placeholder="enter description" />
            <br></br>
            <input onChange={(e)=>{
                changeimg(e)
            }} placeholder="Enter Img Profile"/>
            <br></br>
            <input onChange={(e)=>{
                changPassword(e)
            }}placeholder ="Enter Password" />
            <br></br>
           <button onClick={()=>{
               addUser();
             
           }}>signUp</button>
        </div>
    )
}
