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
      <h3>Bizimlə Əlaqə</h3>

      <label htmlFor="username">Ad Soyad</label>
      <input type="text" placeholder="Ad Soyad" id="username" name='email'/>

      <label htmlFor="password">Şifrə</label>
    
      <input type="password" placeholder="Şifrə" id="password" name='password'/>

      <button className='loginBtn'>Əlaqəyə keç</button>
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