import Icon from 'components/icon'
import React from 'react'
import { Link } from 'react-router-dom'

// HOOKS
import useDogsList from './hooks'

// ESTILOS
import Styles from './style.module.scss'

const DogList: React.FC = () => {
	// HOOKS
	const dogList = useDogsList()

	return (
		<div className={Styles.container}>
			<div className={Styles.title}>
				<h2>Más razas:</h2>
				<p>Click para ver</p>
			</div>
			<ul>
				{dogList?.map((dogName, index) => (
					<li key={dogName}>
						<Link to={`/family/${dogName}`}>
							<span>
								<b>{index + 1}</b> {dogName.charAt(0).toUpperCase()}
								{dogName.substring(1)}
							</span>
							<Icon name="arrow" height={20} width={20} />
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default DogList
