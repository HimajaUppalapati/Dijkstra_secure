import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Create from "./pages/Create";
import LoggedIn from "./pages/LoggedIn";
import SignUp from "./pages/SignUp";
import backgroundImage from "./assets/backgroundImage.svg";
import Headers from "./components/Headers";

function App() {
  return (
    <div 
      style={{backgroundImage: `url(${backgroundImage})`, height: '100vh', backgroundSize: 'cover',
  backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'block'}}
    >
      <Headers/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/loggedin' element={<LoggedIn/>}/>
        <Route path='/loggedin/create' element={<Create/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    );
}

export default App;
