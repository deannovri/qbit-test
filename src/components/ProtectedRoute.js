import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({ children }) {

	const { currentUser } = useAuth()

	if(!currentUser){
		return <Navigate to="/" replace/>
	}
	return children
}

export default ProtectedRoute