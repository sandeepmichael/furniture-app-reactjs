import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert,  } from "react-bootstrap"
import { useAuth } from "./context/AuthContext"
import { Link } from "react-router-dom"
import { toast } from 'react-toastify'

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      // setMessage("Check your inbox for further instructions")
      toast.success("password link has been sent to your email.")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <div>
      <Card className="shadow p-3 mb-5 bg-body rounded">
        <Card.Body>
          <h2 className="text-center mb-4">Password Reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Type Your Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-2 " type="submit">
              Reset Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <button className="btn btn-outline-primary mb-2"><Link to="/login">Login</Link></button>
          </div>

         
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/register">Sign Up</Link>
      </div>
    </div>
  )
}