// REACT
import React from 'react'

// COMPONENTES
import BottomBar from './components/bottomBar'
import Topbar from './components/topbar'

// STYLES
import Styles from './style.module.scss'

const Layout: React.FC<FCProps> = ({ children }) => {
	return (
		<div className={Styles.container}>
			<main>
				<Topbar />
				{children}
			</main>
			<BottomBar />
		</div>
	)
}

export default Layout
