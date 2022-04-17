import React, { useState, useContext, useEffect } from 'react'

const PostContext = React.createContext()

export function usePost() {
	return useContext(PostContext)
}

export function PostProvider({ children }){

	const [post, setPost] = useState(
		JSON.parse(localStorage.getItem("posts")) || []
		)
 	
	useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(post))
  	}, [post])

	function addNewPost(newpost) {
	    newpost.id = Math.random()
	    newpost.isMark = false
	    setPost([...post, newpost])
  	}
  	
  	function handleTogglePost(i){
  		const newposttgl = [...post]
  		newposttgl[i].isMark = !newposttgl[i].isMark
  		setPost(newposttgl)
  	}

	const value = {
		post,
		addNewPost,
		handleTogglePost
	}
	
	return(
		<PostContext.Provider value={value}>
			{ children }
		</PostContext.Provider>
		)
}