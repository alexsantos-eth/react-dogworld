// REACT
import React from 'react'

// COMPONENTS
import FavoriteDog from './components/favorite'
import DogList from './components/list'
import Title from './components/title'

// STYLES
import Styles from './style.module.scss'

const HomePage: React.FC = () => {
	return (
		<div className={Styles.container}>
			<div className={Styles.sections}>
				<Title />
				<FavoriteDog />
			</div>
			<DogList />
		</div>
	)
}

export default HomePage
