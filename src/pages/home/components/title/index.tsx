// REACT
import React from 'react'

// ASSETS
import Doggo from 'assets/dog.png'

// STYLES
import Styles from './style.module.scss'

const Title: React.FC = () => {
	return (
		<div className={Styles.container}>
			<img src={Doggo} alt="Doggo" />
			<div className={Styles.title}>
				<h1>DogWorld</h1>
				<p>
					Si eres un <span>#DogLover</span> te encantara esta app.
				</p>
			</div>
		</div>
	)
}

export default Title
