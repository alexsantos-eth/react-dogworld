import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

// COMPONENTS
import DogFamilyList from './components/list'
import DogDialog from './components/dialog'

// STYLES
import Styles from './style.module.scss'

// TOOLS
import DogFamilyContext from './context'
import handleDogBread from './events'

const DogFamilyPage: React.FC = () => {
	// PARAMS
	const { dogFamily } = useParams()

	// ROUTER
	const navigate = useNavigate()

	// DIALOGO
	const handleDialog = (dogName: string, open: boolean) => () =>
		handleDogBread(navigate, dogName, open, dogFamily)

	return (
		<div className={Styles.container}>
			<DogFamilyContext.Provider value={{ handleDialog }}>
				<DogFamilyList />
				<DogDialog />
			</DogFamilyContext.Provider>
		</div>
	)
}

export default DogFamilyPage
