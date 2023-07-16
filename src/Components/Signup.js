import React,{useEffect, useState} from 'react'
import '../CascadingStyleSheet/Signup.css'
import image from '../Images/peakpx (5).jpg'
import logo from '../Images/logo.jpeg'

const Signup = ({func}) => {

  const[data,setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const[error,setError] = useState({
    errName: false,
    errEmail: false,
    errPass: false
  });

  function handleChange(key,value){
    setData({...data,[key]:value});
  }

  function handleClick(){
    console.log(data)
    if((data.username).includes("@")){
      setError({...error,["errName"]: true});
    }
    else if(!data.email.includes("@gmail.com")){
      setError({...error,['errEmail']: true});
    }
    else if(data.password!==data.confirmPassword){
      setError({...error,['errPass']: true});
    }
    else{
      setError(
        {
          errName: false,
          errEmail: false,
          errPass: false
        }
      );
    }
    
  }



  useEffect(()=>{
    let array = [];
     
    if(localStorage.getItem("userData")){
      let obj = JSON.parse(localStorage.getItem("userData"));
      array = [...obj];
      array.push(data);
      localStorage.setItem("userData",JSON.stringify(array))
    }else{
      array.push(data);
      localStorage.setItem("userData",JSON.stringify(array))
    }
    if(error.errName===false && error.errEmail===false && error.errPass===false){
    setData({
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    })
  }
  },[error])

  return (
    <>

      <div className='container-signup'>
        <div className='left-container'>
        <img src={logo} alt='logo-img' className='signup-logo'></img>
          <img src={image} className='signup-Img' alt='signup_image'></img>
        </div>
        <div className='right-container'>
            <div className='signup-container'>
              <h1>Create Account</h1>
              <div className='signup-details'>
                {error.errName===true?<div className='error'>Invalid username !!</div>:null}
                <input type='name' placeholder='Enter Your Username....' value={data.username} className='userInput' onChange={(e)=>handleChange("username",e.target.value)}/><br/>
                {error.errEmail===true?<div className='error'>Invalid email !!</div>:null}
                <input type='email' placeholder='Enter Your Email....' value={data.email} className='userInput' onChange={(e)=>handleChange("email",e.target.value)}/><br/>
                <input type='password' placeholder='Enter Your Password....' value={data.password} className='userInput' onChange={(e)=>handleChange("password",e.target.value)}/><br/>
                {error.errPass===true?<div className='error'>Password Not Matched !!</div>:null}
                <input type='password' placeholder='Enter Your Confirm Password....' value={data.confirmPassword} className='userInput' onChange={(e)=>handleChange("confirmPassword",e.target.value)}/><br/>
                <button type='submit' className='signup-btn' onClick={handleClick}>Create Account</button><br/>
                <hr/>
                <h5 onClick={()=>func(true)}>Already have an Account?</h5>
              </div>
            </div>
        </div>
      </div>

    </>
  )
}

export default Signup