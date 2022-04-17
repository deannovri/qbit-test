import React, { useRef, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

function Login({ openSignup }) {

	const emailRef = useRef()
	const passwordRef = useRef()
	const { login } = useAuth()
	const navigate = useNavigate()

	const [loading, setLoading] = useState(false)
	const [error, setError] = useState("")

	async function handleSubmit(e){
		e.preventDefault()
		try {
			setError()
			setLoading(true)
			await login(emailRef.current.value, passwordRef.current.value)
			navigate("/post")
		} catch {
			setError(alert("Failed to Login"))
		}
		setLoading(false)
	}

	return (
			<form onSubmit={handleSubmit} className="login-container">
				<h2>Log In</h2>
				<label htmlFor="email">Email</label>
				<input type="email" ref={emailRef} required/>
				<label htmlFor="password">Password</label>
				<input type="password" ref={passwordRef} required/>
				<button disabled={loading} >Log In</button>
				<button onClick={openSignup}>Create New Account</button>
			</form>
	)
}

export default Login