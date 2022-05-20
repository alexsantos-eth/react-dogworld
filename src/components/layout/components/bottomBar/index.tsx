// REACT
import React from 'react'
import { Link } from 'react-router-dom'

// COMPONENTS
import Icon from 'components/icon'

// STYLE
import Styles from './style.module.scss'

const BottomBar: React.FC = () => {
	return (
		<div className={Styles.container}>
			<Link to="/" className={`${Styles.homeButton}`}>
				<div>
					<Icon name="home" height={30} width={30} />
				</div>
			</Link>
		</div>
	)
}

export default BottomBar
