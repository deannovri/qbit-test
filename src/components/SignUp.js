import React, { useRef, useState } from 'react'
import { useAuth } from '../context/AuthContext'

function SignUp({ openLogin }) {

	const emailRef = useRef()
	const passwordRef = useRef()
	const { signup } = useAuth()

	const [loading, setLoading] = useState(false)
	const [error, setError] = useState("")

	async function handleSubmit(e){
		e.preventDefault()
		try {
			setError("")
			setLoading(true)
			await signup(emailRef.current.value, passwordRef.current.value)
		} catch {
			setError(alert("Failed to Sign Up"))
		}
		setLoading(false)
	}

	return (
		<form onSubmit={handleSubmit} className="signup-container">
		<h2>Sign Up</h2>
			<label htmlFor="email">Email</label>
			<input type="email" ref={emailRef} required/>
			<label htmlFor="password">Password</label>
			<input type="password" ref={passwordRef} required/>
			<button disabled={loading} >Sign Up</button>
			<button onClick={openLogin}>Back To Login</button>
		</form>
	)
}

export default SignUp