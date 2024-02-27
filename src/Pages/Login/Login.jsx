import React from 'react'
import '../Login/Login.css'
import Header from '../../Components/Header/Header'
const Login = () => {
  return (
<>
<Header/>
<div className='log'>
<div className="background">
      <div className="shape"></div>
      <div className="shape"></div>
  </div>
 <form action="https://getform.io/f/9avNgMaG" method="POST" >
      <h3>Login Here</h3>

      <label htmlFor="username">Username</label>
      <input type="text" placeholder="Email or Phone" id="username" name='email'/>

      <label htmlFor="password">Password</label>
    
      <input type="password" placeholder="Password" id="password" name='passüord'/>

      <button className='loginBtn'>Log In</button>
      <div className="social">
        <div className="go"><i class="fab fa-google"></i>  Google</div>
        <div className="fb"><i class="fab fa-facebook"></i>  Facebook</div>
      </div>
      </form>

</div>
</>


  )
}

export default Login