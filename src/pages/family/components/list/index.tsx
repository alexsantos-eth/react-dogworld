import React from 'react'

// COMPONENTS
import DogCard from './components/item'

// HOOKS
import { useParams } from 'react-router-dom'
import useDogFamily from './hooks'

// ESTILOS
import Styles from './style.module.scss'

const DogFamilyList: React.FC = () => {
	// PARAMS
	const { dogFamily } = useParams()

	// LIST
	const dogList = useDogFamily(dogFamily ?? '')

	return (
		<div className={Styles.container}>
			{dogList?.map((dog) => (
				<DogCard key={dog.name} dog={dog} />
			))}
		</div>
	)
}

export default DogFamilyList
