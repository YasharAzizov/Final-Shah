import React from 'react'
import '../Login/Login.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
const Login = () => {
  return (
<>
<Header/>
<div className='log'>
<div className="background">
      <div className="shape"></div>
      <div className="shape"></div>
  </div>
 <form >
      <h3>Login Here</h3>

      <label htmlFor="username">Username</label>
      <input type="text" placeholder="Email or Phone" id="username"/>

      <label htmlFor="password">Password</label>
    
      <input type="password" placeholder="Password" id="password"/>

      <button className='loginBtn'>Log In</button>
      <div className="social">
        <div className="go"><i class="fab fa-google"></i>  Google</div>
        <div className="fb"><i class="fab fa-facebook"></i>  Facebook</div>
      </div>
      </form>
</div>
<Footer/>
</>


  )
}

export default Login