// REACT
import React from 'react'

// PROVIDERS
import RouterProvider from 'providers/router'

// COMPONENTS
import Layout from 'components/layout'

// HOOKS
import useIcons from './hooks'

const App: React.FC = () => {
	// HOOKS
	useIcons()

	return (
		<Layout>
			<RouterProvider />
		</Layout>
	)
}

export default App
