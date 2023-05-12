import { Alert } from 'react-bootstrap'
import React,{ useRef, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import {toast} from 'react-toastify'



const Register = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const {signup} = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    
    e.preventDefault()
    if(passwordRef.current.value !== passwordConfirmRef.current.value){
      return setError('passwords do not match')
    }

     try{
      setError("")
      setLoading(true)
    await signup(emailRef.current.value, passwordRef.current.value);
     toast.success("Registered successfully")
    navigate('/dashboard')
    //  setTimeout(() => {
    //   navigate('/dashboard', 4000)
    //  })
    } catch {
      setError("something went wrong or Already registered!!")
        
    }

    setLoading(false)
  } 

  

  return (
    <div>
           <div className='container shadow my-5'>
            <div className='row'>
                <div className='col-md-5 d-flex flex-column align-items-center justify-content-center form-1'>
                    <h1 className='display-4 fw-bolder'>Hello,</h1>
                    <p className='lead text-center'>Enter Your Details To Register</p>
                    <h1 className='mb-4'>OR</h1>
                    <Link to='/login'>
                    <button type="button" class="btn btn-outline-primary mb-2">Login</button>
                    </Link>
                </div>
                <div className='col-md-6 p-5'>
                    <h1 className='display-6 fw-bolder text-center'>Register</h1>

                    <form onSubmit={handleSubmit}>
                    <div class="mb-3">
                      {error && <Alert variant="danger">{error}</Alert>}
                  
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email" className="form-control"  ref={emailRef}  />
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Password</label>
    <input type="password" className="form-control"  ref={passwordRef} />
  
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
    <input type="password" className="form-control" ref={passwordConfirmRef} />
  </div>
 
  <button disabled={loading} type="submit" className="btn btn-primary mb-2">Register</button>
</form>

                </div>

            </div>

        </div>
    </div>
  )
}

export default Register