import React, { useRef, useState } from 'react'
import { Card, Button, Form, Alert } from 'react-bootstrap'
import { useNavigate, Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login, setCurrentUser } = useAppContext();
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    setError('')
    setLoading(true);

    login(emailRef.current.value, passwordRef.current.value)
      .then(result => {
        setCurrentUser(result.data);
        navigate("/")
      })
      .catch(err => {
        setError(err.response.data.error);
        setLoading(false);
      })
  }

  return (
    <div className='w-100' style={{ maxWidth: "400px" }}>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Login</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' id="id">
              <Form.Label>Email</Form.Label>
              <Form.Control ref={emailRef} defaultValue="abc@abc.com" required />
            </Form.Group>
            <Form.Group className='mb-3' id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} defaultValue="123456" required />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Button disabled={loading} className='w-100' type='submit'>
                {loading ? "processing..." : "Login"}
              </Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        don't have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  )
}