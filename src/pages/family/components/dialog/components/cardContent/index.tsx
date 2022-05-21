import React, { useState } from 'react'

// COMPONENTS
import Icon from 'components/icon'

// HOOKS
import { useParams, useSearchParams } from 'react-router-dom'
import useDogCtx from 'pages/family/hooks'
import capitalizeText from 'utils/tools'
import toggleLikeDog from './events'
import useDogLike from './hooks'

// STYLES
import Styles from './style.module.scss'

const DogCardContent: React.FC = () => {
	// LIKE
	const [like, setLike] = useState<boolean>(false)

	// PARAMS
	const { dogFamily } = useParams()

	// SEARCH
	const [search] = useSearchParams()

	// CONTEXT
	const { handleDialog } = useDogCtx()

	// SEARCH PARAMS
	const dogName: string | null = search.get('dogName')

	// HANDLE LIKE
	const toggleLike = () => toggleLikeDog(setLike, dogFamily, dogName)

	// HOOKS
	useDogLike(setLike, dogFamily, dogName)

	return (
		<div className={Styles.content}>
			<button onClick={toggleLike} className={`${Styles.like} ${like ? Styles.liked : ''} btn`}>
				<Icon name="love" height={30} width={30} />
			</button>
			<div className={Styles.info}>
				<h2>
					{capitalizeText(dogName ?? '')} {dogName !== dogFamily && dogFamily}
				</h2>
				<p>
					{like
						? 'Esta es tu raza favorita, ahora aparecera en tu página de inicio.'
						: '¿Te gustaria marcar esta raza como favorita?, esto aparecera en la página de inicio.'}
				</p>
				<button onClick={handleDialog(dogName ?? '', false)} className="btn">
					Aceptar
				</button>
			</div>
		</div>
	)
}

export default DogCardContent
