// REACT
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

// PROVIDERS
import RouterProvider from 'providers/router'

// COMPONENTS
import Layout from 'components/layout'

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Layout>
				<RouterProvider />
			</Layout>
		</BrowserRouter>
	)
}

export default App
