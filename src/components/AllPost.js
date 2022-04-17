import React from 'react'
import { usePost } from '../context/PostContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

function AllPost() {

	const { post, handleTogglePost } = usePost()
	
	return (
		<div className="allpost-container">
		{
			post.map((res, i) => {
				return (
					<div className="allpost-card" key={res.id}>
					<div>{res.title}</div>
					<div>{res.comment}</div>
					{
						res.isMark ? 
						<button onClick={() => {handleTogglePost(i)}}><FontAwesomeIcon icon={faCheck} size={"xl"} style={{ color: "blue" }} /></button>
						: 
						<button onClick={() => {handleTogglePost(i)}}><FontAwesomeIcon icon={faCheck} size={"xl"} style={{ color: "lightgrey" }} /></button>
					}
					</div>
					)
			})
		}
		</div>
	)
}

export default AllPost