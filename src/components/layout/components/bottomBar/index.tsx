// REACT
import React from 'react'
import { Link } from 'react-router-dom'

// STYLE
import Styles from './style.module.scss'

const BottomBar = () => {
	return (
		<div className={Styles.container}>
			<Link to="/" className={`${Styles.homeButton}`}>
				<div>
					<span data-feather="home" />
				</div>
			</Link>
		</div>
	)
}

export default BottomBar
