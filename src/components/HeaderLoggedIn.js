import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

function HeaderLoggedIn() {

	const navigate = useNavigate()

	const { currentUser, logout } = useAuth()
	const [error, setError] = useState("")

	async function handleLogout(e){
		try {
			setError("")
			await logout()
			navigate("/	")
		} catch {
			setError(alert("Failed to Log Out"))
		}
	}

	return (
		<nav className="header-login-navbar">
			<div className="header-login-navbarlogo">
				<h3>YPOST!</h3>
				<NavLink reloadDocument id="navbar-login-separation" className={({ isActive }) => (isActive ? "active" : "inactive")} to="/">
					Home
				</NavLink>
				<NavLink id="navbar-login-separation" className={({ isActive }) => (isActive ? "active" : "inactive")} to="/post">
					Post
				</NavLink>
				<NavLink id="navbar-login-separation" className={({ isActive }) => (isActive ? "active" : "inactive")} to="/about">
					About
				</NavLink>
			</div>
			<div className="header-login-logout">
				<strong>Hello {currentUser.email}</strong>
				<button onClick={handleLogout}>Log out</button>
			</div>
		</nav>
	)
}

export default HeaderLoggedIn