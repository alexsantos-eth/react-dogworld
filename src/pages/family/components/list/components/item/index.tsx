import React from 'react'

// HOOKS
import { useParams } from 'react-router-dom'
import useDogCtx from 'pages/family/hooks'
import capitalizeText from 'utils/tools'

// STYLES
import Styles from './style.module.scss'

const DogCard: React.FC<DogCardProps> = ({ dog }) => {
	// PARAMS
	const { dogFamily } = useParams()

	// ROUTER
	const { handleDialog } = useDogCtx()

	return (
		<div className={Styles.container} onClick={handleDialog(dog.name, true)}>
			{/* MEDIA */}
			<div className={Styles.image}>
				<img src={dog.url} alt={dog.name} />
			</div>

			{/* CONTENT */}
			<div className={Styles.content}>
				<div className={Styles.info}>
					<h2>
						{capitalizeText(dog.name)} {!dog.noBread && dogFamily}
					</h2>
					<p>Click para ver más</p>
				</div>
			</div>
		</div>
	)
}

export default DogCard
