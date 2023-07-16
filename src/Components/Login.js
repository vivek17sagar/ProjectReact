import React,{useState} from 'react'
import '../CascadingStyleSheet/Login.css'
import image from '../Images/peakpx (5).jpg'
import logo from '../Images/logo.jpeg'
import {useNavigate} from "react-router-dom"

const Login = ({func}) => {

  const navigate = useNavigate();

  const[data,setData] = useState({
    username: "",
    password: ""
  })

  const[nameError,setNameError] = useState(false);
  const[passError,setPassError] = useState(false);


  function handleChange(key,value){
    setData({...data,[key]:value});
  }


  function handleClick(){
    let userneed = data.username
    let userneedpass = data.password
    if(localStorage.getItem("userData")){
      let data = JSON.parse(localStorage.getItem("userData"));
      let ans = data.some((item)=>{
        return item.username==userneed
      })
      let ans2 = data.some((item)=>{
        return item.password==userneedpass
      })

      if(ans){
        setNameError(false);
      }else{
        setNameError(true);
      }

      if(ans2){
        setPassError(false);
      }else{
        setPassError(true);
      }

      if(ans&&ans2){
        navigate("/home",{state:{userneed}})
      }

    }
  }



  return (
    <>
      <div className='container-login'>
        <div className='left-container'>
        <img src={logo} alt='logo-img' className='login-logo'></img>
          <img src={image} className='login-Img' alt='login_image'></img>
        </div>
        <div className='right-container'>
            <div className='login-container'>
              <h1>Login</h1>
              <div className='login-details'>
              {nameError===true?<div className='error'>username invalid !!</div>:<div></div>}
                <input type='name' placeholder='Enter Your Username....' value={data.username} className='userInput' onChange={(e)=>handleChange("username",e.target.value)}/><br/>
                {passError===true?<div className='error'>password invalid !!</div>:<div></div>}
                <input type='password' placeholder='Enter Your Password....' value={data.password} className='userInput' onChange={(e)=>handleChange("password",e.target.value)}/><br/>
                <button type='submit' className='login-btn' onClick={handleClick}>Log in</button><br/>
                <hr/>
                <h5 onClick={()=>func(false)}>Don't have an Account?</h5>
              </div>
            </div>
        </div>
      </div>

    </>
  )
}

export default Login