// REACT
import React from 'react'

// ASSETS
import Doggo2 from 'assets/dog2.png'

// STYLES
import Styles from './style.module.scss'

const NotFound: React.FC = () => {
	return (
		<div className={Styles.container}>
			<img src={Doggo2} alt="Doggo" />
			<div className={Styles.title}>
				<h1>Favorito</h1>
				<p>Parece que aún no tienes un favorito</p>
			</div>
		</div>
	)
}

export default NotFound
