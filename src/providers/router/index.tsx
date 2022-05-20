// REACT
import React from 'react'
import { Routes, Route } from 'react-router-dom'

// PAGES
import HomePage from 'pages/home'

const RouterProvider: React.FC = () => (
	<Routes>
		<Route path="/" element={<HomePage />} />
	</Routes>
)

export default RouterProvider
