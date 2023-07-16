import React,{useState} from 'react'
import '../CascadingStyleSheet/Login.css'
import Signup from './Signup'
import Login from './Login'

const Loginhome = () => {

  const[userLogin,setUserLogin] = useState(true);

  function setUser(param){
    setUserLogin(param);
  }
  return (
    <div>
    {userLogin===true?<Login func={setUser}/>:<Signup func={setUser}/>}
    </div>
  )
}

export default Loginhome

