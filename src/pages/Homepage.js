import React, { useState } from 'react'
import SignUp from '../components/SignUp'
import Login from '../components/Login'
import HeaderHome from '../components/HeaderHome'
import HeaderLoggedIn from '../components/HeaderLoggedIn'
import { usePost } from '../context/PostContext'
import { useAuth } from '../context/AuthContext'

function Homepage() {

	const { currentUser } = useAuth()

	const { post } = usePost()
	const checkedPost = post.filter(res => {
		return res.isMark === true
	})
	
	const [login, setLogin] = useState(true)

	function handleClickOpenSignUp(e){
		e.preventDefault()
		setLogin(false)
	}

	function handleClickOpenLogIn(e){
		e.preventDefault()
		setLogin(true)
	}

	return (
		<>
		{
			currentUser ? <HeaderLoggedIn/> : <HeaderHome/>
		}
		<div className="homepage-container">
			<div className="checked-post">
				{
					checkedPost.map(res => {
						return (
							<div className="checked-post-card" key={res.id}>
							<h4>Title</h4>
							<div>{res.title}</div>
							<h4>Comment</h4>
							<div>{res.comment}</div>
							</div>
							)
					})
				}
			</div>
			<div className="homepage-login-signup">
				{ login ? <Login openSignup={handleClickOpenSignUp}/> : <SignUp openLogin={handleClickOpenLogIn}/>}
			</div>
		</div>
		</>
	)
}

export default Homepage