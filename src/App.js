import{Route} from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import SignUp from "./component/SignUp";
import LogIn from "./component/LogIn";
import Home from "./component/Home";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route exact path="/Home"component={Home}/>
      <Route exact path="/signUp"component={SignUp}/>
      <Route exact path="/LogIn"component={LogIn}/>
    </div>
  );
}

export default App;
