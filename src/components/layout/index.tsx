// REACT
import React from 'react'

// COMPONENTS
import BottomBar from './components/bottomBar'

// STYLES
import Styles from './style.module.scss'

const Layout: React.FC<FCProps> = ({ children }) => {
	return (
		<div className={Styles.container}>
			<main>{children}</main>
			<BottomBar />
		</div>
	)
}

export default Layout
