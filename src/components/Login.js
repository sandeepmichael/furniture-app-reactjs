import { Alert } from 'bootstrap/dist/js/bootstrap.bundle';
import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

const Login = () => {
 const emailRef = useRef()
 const passwordRef = useRef()
 const [error, setError] = useState("")
 const [loading, setLoading] = useState(false)

 const {login} = useAuth()
 const navigate = useNavigate()

 const handleSubmit = async (e) => {
    
  e.preventDefault()
 
   try{
    setError("")
    setLoading(true)
  await login(emailRef.current.value, passwordRef.current.value);
  navigate("/dashboard")

  } catch {
    setError("Failed to login in")
      
  }

  setLoading(false)
} 




  return (
    <div>
      <div className='container shadow my-5'>
        <div className='row'>
          <div className='col-md-5 d-flex flex-column align-items-center justify-content-center form'>
            <h1 className='display-4 fw-bolder'>Welcome</h1>
            <p className='lead text-center'>Enter Your Credentials To Login</p>
            <h1 className='mb-4'>OR</h1>
            <Link to='/register'>
              <button type="button" class="btn btn-outline-primary mb-2">Register</button>
            </Link>
  </div>
          <div className='col-md-6 p-5'>
            <h1 className='display-6 fw-bolder text-center'>LOGIN</h1>

            <form onSubmit={handleSubmit}>
              <div class="mb-3">
                {error && <Alert>{error}</Alert>}
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" ref={emailRef}/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" ref={passwordRef} />
              </div>

              <button disabled={loading} type="submit" class="btn btn-primary mb-2">Login</button>
              </form>
              <div className='w-100 text-center mt-3 bg-primary text-white p-2'>
                <Link to='/forgot-password'>Forgot Password?</Link>
              </div>
              <hr />
              {/* <button disabled={disabled} className="btn btn-primary w-100 mb-4">
                <span className="fa fa-google me-2"></span> Sign in With Google
  </button> 
             */}

          </div>

        </div>

      </div>
    </div>
  )
}

export default Login