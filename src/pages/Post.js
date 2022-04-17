import React from 'react'
import HeaderLoggedIn from '../components/HeaderLoggedIn'
import InputPost from '../components/InputPost'
import AllPost from '../components/AllPost'
import { PostProvider } from '../context/PostContext'

function Post() {
	return (
		<>
		<HeaderLoggedIn/>
		<div className="post-container">
		<PostProvider>
			<AllPost/>
			<InputPost/>
		</PostProvider>
		</div>
		</>
	)
}

export default Post