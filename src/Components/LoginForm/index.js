import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import './index.css'


const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [showSubmitError, setShowSubmitError] = useState(false);

  const navigate = useNavigate()

  
  
  const onSubmitSuccess = (jwtToken) => {
    Cookies.set('jwt_token', jwtToken, { expires: 30})
    navigate('/', {replace:true})
  }

  const onSubmitFailure = (data) => {
    const { error_msg } = data;
    setErrorMsg(error_msg)
    setShowSubmitError(true)
    
  }

  const submitForm = async (event) => {
    event.preventDefault()
    const userDetails = { username, password }

    const url = 'https://apis.ccbp.in/login/'
    
    const options = {
      method : "POST",
      body : JSON.stringify(userDetails)
    }
    try {
      const response = await fetch(url, options)
      const data = await response.json()
    
      if (response.ok === true) {
        onSubmitSuccess(data.jwt_token)
      } else {
        onSubmitFailure(data)
      }
    } catch(error) {
      console.log('Error during fetch:', error)
    }
    
  }

  const jwtToken = Cookies.get('jwt_token')

  useEffect(() => {
    if (jwtToken !== undefined) {
      navigate('/')
    }
  }, [jwtToken, navigate])


  return (
    
    <div className='login-form-container'>
      <img src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png' className='login-website-logo-mobile-image' alt='website login'/>

      <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-image"
          alt="website login"
        />

        <form className='form-container' onSubmit={submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="login-website-logo-desktop-image"
            alt="website logo"
          />

          <div className="input-container">
            <label htmlFor="username" className="input-label">USERNAME</label>
            <input type="text" id="username" placeholder="Username" className='username-input-field' value={username} onChange={(event) => setUsername(event.target.value)}/>
          </div>

          <div className="input-container">
            <label htmlFor="password" className="input-label">PASSWORD</label>
            <input type="password" id="password" value={password} placeholder="Password" className='password-input-field' onChange={(event) => setPassword(event.target.value)} />
            { showSubmitError && <p className='error-message'>*{errorMsg}</p>}
          </div>

          <button type='submit' className='login-button'>Login</button>
          

        </form>
    </div>
  )
}

export default LoginForm