import Home from './components/home/home';
import SignUp from './components/signUp/signUp';
import SignIn from './components/signIn/signIn';
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'

function App () {
  const [user, setLoginUser] = useState({});
  return (
     <BrowserRouter>
     <Routes className="App">
       <Route path="/" element={
          user && user._id ? <Home name={user.name} setLoginUser={setLoginUser}/> : <SignIn setLoginUser={setLoginUser}/>
       } />
       <Route path="/signUp" element={<SignUp />} />
       <Route path="/signIn" element={<SignIn setLoginUser={setLoginUser}/>} />
     </Routes>
   </BrowserRouter>
  );
}

export default App;
