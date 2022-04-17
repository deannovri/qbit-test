import React, { useState } from 'react'
import { usePost } from '../context/PostContext'

function InputPost() {

	const { addNewPost } = usePost()

	const [addPost, setAddPost] = useState({
		title: "",
		comment: ""
	})

	function handleChange(e) {
		e.preventDefault()
		setAddPost({...addPost, [e.target.name] : e.target.value})
	}
	
	function handleSubmit(e){
		e.preventDefault()
		addNewPost(addPost)
		setAddPost(e.target.reset())
	}
	
	return (
		<form className="post-form" onSubmit={handleSubmit} >
			<h2>Post something</h2>
			<label htmlFor="title">Title</label>
			<input 
				type="text" 
				name="title" 
				onChange={handleChange} 
				 />
			<label htmlFor="content">Content</label>
			<input 
				type="text" 
				name="comment" 
				onChange={handleChange} 
				 />
			<button>Submit</button>
		</form>
	)
}

export default InputPost