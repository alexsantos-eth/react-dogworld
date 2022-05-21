import React from 'react'

// HOOKS
import { useParams } from 'react-router-dom'
import useDogFamily from './hooks'

// COMPONENTS
import DogFamilySkeleton from './components/skeleton'
import DogCard from './components/item'

// ESTILOS
import Styles from './style.module.scss'

const DogFamilyList: React.FC = () => {
	// PARAMS
	const { dogFamily } = useParams()

	// LIST
	const dogList = useDogFamily(dogFamily ?? '')

	return (
		<div className={Styles.container}>
			{dogList
				? dogList.map((dog) => <DogCard key={dog.name} dog={dog} />)
				: Array(3)
						.fill({})
						.map((_, i) => <DogFamilySkeleton key={`dogCard_skeleton_${i}`} />)}
		</div>
	)
}

export default DogFamilyList
