import React from 'react'
import { useParams } from 'react-router-dom'

// HOOKS
import useDogCtx from 'pages/family/hooks'

// STYLES
import Styles from './style.module.scss'

const DogCard: React.FC<DogCardProps> = ({ dog }) => {
	// PARAMS
	const { dogFamily } = useParams()

	// ROUTER
	const { handleDialog } = useDogCtx()

	return (
		<div className={Styles.container} onClick={handleDialog(dog.name, true)}>
			<div className={Styles.image}>
				<img src={dog.url} alt={dog.name} />
			</div>
			<div className={Styles.content}>
				<div className={Styles.info}>
					<h2>
						{dog.name.charAt(0).toUpperCase()}
						{dog.name.substring(1)} {dogFamily}
					</h2>
					<p>Click para ver más</p>
				</div>
			</div>
		</div>
	)
}

export default DogCard
