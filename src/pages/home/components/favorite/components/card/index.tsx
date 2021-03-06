import React from 'react'

// TOOLS
import capitalizeText from 'utils/tools'

// COMPONENTS
import DogCardMedia from 'pages/family/components/dialog/components/cardMedia'

// STYLE
import Styles from './style.module.scss'

const DogFavoriteCard: React.FC = () => {
	// LOCALDATA
	const likeStorage = window.localStorage.getItem('like')
	const localDog: LocalDog = likeStorage ? JSON.parse(likeStorage) : undefined

	return (
		<div className={Styles.container}>
			{/* MEDIA */}
			<DogCardMedia options={localDog} />

			{/* CONTENT */}
			<h2>
				{capitalizeText(localDog.dogName)} {!localDog.noBread && localDog.family}
			</h2>
			<p>Esta es tu raza de perro favorita.</p>
		</div>
	)
}

export default DogFavoriteCard
