// REACT
import React from 'react'

// COMPONENTES
import Topbar from './components/topbar'

const Layout: React.FC<FCProps> = ({ children }) => {
	return (
		<div>
			<Topbar />
			{children}
		</div>
	)
}

export default Layout
