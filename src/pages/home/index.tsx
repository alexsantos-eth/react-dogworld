// REACT
import React from 'react'

// COMPONENTS
import NotFound from './components/notFound'
import Title from './components/title'

// STYLES
import Styles from './style.module.scss'

const HomePage: React.FC = () => {
	return (
		<div className={Styles.container}>
			<div className={Styles.sections}>
				<Title />
				<NotFound />
			</div>
		</div>
	)
}

export default HomePage
