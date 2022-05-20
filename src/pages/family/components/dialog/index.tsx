import React from 'react'

// HOOKS
import { useParams, useSearchParams } from 'react-router-dom'
import useDogCtx from 'pages/family/hooks'

// STYLES
import Styles from './style.module.scss'

const DogDialog: React.FC = () => {
	// PARAMS
	const { dogFamily } = useParams()

	// SEARCH
	const [search] = useSearchParams()

	// CONTEXT
	const { handleDialog } = useDogCtx()

	// SEARCH PARAMS
	const dogName: string | null = search.get('dogName')
	const openDialog: boolean = search.get('show') === '1'

	return (
		<div
			className={Styles.container}
			style={{
				pointerEvents: openDialog ? 'all' : 'none',
				opacity: openDialog ? 1 : 0,
			}}
		>
			<div onClick={handleDialog(dogName ?? '', false)} className={Styles.backdrop} />
			<p>Click para ver más</p>
		</div>
	)
}

export default DogDialog
