import React ,{useState} from "react";
import{Route} from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import SignUp from "./component/SignUp";
import LogIn from "./component/LogIn";
import Home from "./component/Home";
import Like from "./component/Like";
import Account from "./component/Account";
import About from "./component/About";
import Job from "./component/Job";
import HiBage from "./component/HiBage";

function App() {
  const [token, setToken] = useState("")
  return (
    <div className="App">
      <Navbar token={token} setToken={setToken}/>
      <Route exact path="/Home"    render={()=>{ return <Home    token={token}/>}}/>
      <Route exact path="/Account" render={()=>{ return <Account token={token}/>}}/>
      <Route exact path="/Like"    render={()=>{ return <Like    token={token}/>}}/>
      <Route exact path="/Job"     render={()=>{return  <Job     token={token}/>}}/>
      <Route exact path="/signUp" component={SignUp}/>
      <Route exact path="/HiBage" component={HiBage}/>
      <Route exact path="/LogIn"   render={()=>{ return <LogIn   setToken={setToken}/>}}/>
      <Route exact path="/About"   render={()=>{ return <About   token={token}/>}}/>
    </div>
  );
}

export default App;
