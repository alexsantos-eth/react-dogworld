// REACT
import React from 'react'
import { Routes, Route } from 'react-router-dom'

// PAGES
import DogFamilyPage from 'pages/family'
import HomePage from 'pages/home'

const RouterProvider: React.FC = () => (
	<Routes>
		<Route path="/" element={<HomePage />} />
		<Route path="/family/:dogFamily" element={<DogFamilyPage />} />
	</Routes>
)

export default RouterProvider
