import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

export default function LogIn() {
const history = useHistory()
const [account, setAccount] = useState()
const [password, setPassword] = useState()

const accountInput=(e)=>{
    setAccount(e.target.value)
}

const passwordInput=(e)=>{
    setPassword(e.target.value) 
}

const logInBtn = async()=>{
    const response = await axios.post("http://localhost:5000/logIn",{
    account:account,
    password:password,

    })
    if(response.status=== 201){
        history.push("/Home")
    }
}
    return (
        <div>
          <input type="text" placeholder="UserName" onChange={accountInput} />
          <input type="text"placeholder ="Yore password"onChange={passwordInput}/>
          <button onClick={()=>{logInBtn()}} >Login</button>
          
        </div>
    )
}
