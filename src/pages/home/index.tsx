// REACT
import React from 'react'

// ASSETS
import Doggo from 'assets/dog.png'

// STYLES
import Styles from './style.module.scss'

const HomePage: React.FC = () => {
	return (
		<div className={Styles.container}>
			<div className={Styles.titleContainer}>
				<img src={Doggo} alt="Doggo" />
				<div className={Styles.title}>
					<h1>DogWorld</h1>
					<p>
						Si eres un <span>#DogLover</span> te encantara esta app.
					</p>
				</div>
			</div>
		</div>
	)
}

export default HomePage
