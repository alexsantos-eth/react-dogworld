import React from 'react'

// HOOKS
import { useParams, useSearchParams } from 'react-router-dom'
import useDogCtx from 'pages/family/hooks'

// STYLES
import Styles from './style.module.scss'

const DogCardContent: React.FC = () => {
	// PARAMS
	const { dogFamily } = useParams()

	// SEARCH
	const [search] = useSearchParams()

	// CONTEXT
	const { handleDialog } = useDogCtx()

	// SEARCH PARAMS
	const dogName: string | null = search.get('dogName')

	return (
		<div className={Styles.content}>
			<div className={Styles.info}>
				<h2>
					{dogName?.charAt(0).toUpperCase()}
					{dogName?.substring(1)} {dogFamily}
				</h2>
				<p>¿Te gustaria marcar esta raza como favorita?, esto aparecera en la página de inicio</p>
				<button onClick={handleDialog(dogName ?? '', false)} className="btn">
					Aceptar
				</button>
			</div>
		</div>
	)
}

export default DogCardContent
