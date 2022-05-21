import React from 'react'
import { Link } from 'react-router-dom'

// TOOLS
import capitalizeText from 'utils/tools'

// COMPONENTS
import Icon from 'components/icon'

// ESTILOS
import Styles from './style.module.scss'

const DogListItem: React.FC<DogListItemProps> = ({ dogName, index }) => {
	return (
		<li className={Styles.item}>
			<Link to={`/family/${dogName}`}>
				<span>
					<b>{index + 1}</b> {capitalizeText(dogName)}
				</span>
				<Icon name="arrow" height={20} width={20} />
			</Link>
		</li>
	)
}

export default DogListItem
