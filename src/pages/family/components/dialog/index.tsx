import React from 'react'

// HOOKS
import { useSearchParams } from 'react-router-dom'
import useDogCtx from 'pages/family/hooks'

// STYLES
import Styles from './style.module.scss'

// COMPONENTS
import DogCardContent from './components/cardContent'
import DogCardMedia from './components/cardMedia'

const DogDialog: React.FC = () => {
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
			<div
				className={Styles.item}
				style={{ opacity: openDialog ? 1 : 0, transform: `scale(${openDialog ? 1 : 0.9})` }}
			>
				<DogCardMedia />
				<DogCardContent />
			</div>
		</div>
	)
}

export default DogDialog
