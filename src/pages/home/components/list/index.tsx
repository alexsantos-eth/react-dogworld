import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// COMPONENTS
import Icon from 'components/icon'

// HOOKS
import useDogsList from './hooks'

// ESTILOS
import Styles from './style.module.scss'

const DogList: React.FC = () => {
	// MORE
	const [showMore, setShowMore] = useState<boolean>(false)

	// TOGGLE
	const toggleShowMore = () => setShowMore(!showMore)

	// HOOKS
	const dogList = useDogsList()

	return (
		<div className={Styles.container}>
			<div className={Styles.title}>
				<h2>Más razas:</h2>
				<p>Click para ver</p>
			</div>
			<ul>
				{dogList?.map((dogName, index) =>
					(!showMore && index < 3) || showMore ? (
						<li key={dogName}>
							<Link to={`/family/${dogName}`}>
								<span>
									<b>{index + 1}</b> {dogName.charAt(0).toUpperCase()}
									{dogName.substring(1)}
								</span>
								<Icon name="arrow" height={20} width={20} />
							</Link>
						</li>
					) : null,
				)}
			</ul>
			<button onClick={toggleShowMore}>
				<Icon name="down" height={20} width={20} />
				{showMore ? 'Ver menos' : 'Ver más'}
			</button>
		</div>
	)
}

export default DogList
