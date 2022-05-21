import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// COMPONENTS
import Icon from 'components/icon'

// HOOKS
import useDogsList from './hooks'

// ESTILOS
import Styles from './style.module.scss'

// LOCAL COMPONENTS
import DogListSkeleton from './components/skeleton'
import DogListItem from './components/item'

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
				{dogList
					? dogList.map((dogName, index) =>
							(!showMore && index < 3) || showMore ? (
								<DogListItem key={dogName} dogName={dogName} index={index} />
							) : null,
					  )
					: Array(3)
							.fill(3)
							.map((_, i) => <DogListSkeleton key={`dog_item_skeleton_${i}`} />)}
			</ul>
			<button className="btn" onClick={toggleShowMore}>
				<div
					style={{
						transition: 'transform 0.2s cubic-bezier(.47,1.64,.41,.8)',
						transform: `rotate(${!showMore ? 0 : 180}deg) translate(${
							!showMore ? 0 : '10px'
						}, 3px)`,
					}}
				>
					<Icon name="down" height={20} width={20} />
				</div>
				{showMore ? 'Ver menos' : 'Ver más'}
			</button>
		</div>
	)
}

export default DogList
