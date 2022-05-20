// REACT
import React from 'react'

// COMPONENTES
import Topbar from './components/topbar'

// STYLES
import Styles from './style.module.scss'

const Layout: React.FC<FCProps> = ({ children }) => {
	return (
		<div className={Styles.container}>
			<Topbar />
			{children}
		</div>
	)
}

export default Layout
