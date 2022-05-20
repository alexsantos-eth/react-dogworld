import React from 'react'

// HOOKS
import { useParams } from 'react-router-dom'
import useDogFamily from './hooks'

const DogFamilyPage: React.FC = () => {
	// PARAMS
	const { dogFamily } = useParams()

	// LIST
	const dogList = useDogFamily(dogFamily ?? '')

	return <div>DogFamily</div>
}

export default DogFamilyPage
