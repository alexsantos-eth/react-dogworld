// REACT
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// PAGES
import HomePage from 'pages/home'

const RouterProvider: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<HomePage />} />
		</Routes>
	</BrowserRouter>
)

export default RouterProvider
