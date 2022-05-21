import React, { useState } from 'react'

// COMPONENTS
import Icon from 'components/icon'

// HOOKS
import { useParams, useSearchParams } from 'react-router-dom'
import useDogsImages from './hooks'

// STYLES
import Styles from './style.module.scss'

const DogCardMedia: React.FC = () => {
	// SLIDER
	const [step, setStep] = useState<number>(0)

	// PARAMS
	const { dogFamily } = useParams()

	// SEARCH
	const [search] = useSearchParams()

	// MANAGE STEPS
	const handleSteps = (newStep: number) => () => setStep(Math.max(0, Math.min(step + newStep, 4)))

	// SEARCH PARAMS
	const dogName: string | null = search.get('dogName')
	const openDialog: boolean = search.get('show') === '1'

	// HOOKS
	const dogImages = useDogsImages(dogFamily, dogName, openDialog)

	return (
		<div className={Styles.image}>
			<div className={Styles.slider}>
				<div className={Styles.images} style={{ transform: `translateX(-${step * 20}%)` }}>
					{dogImages?.map((url: string, index: number) => (
						<img src={url} key={`${dogName}_${index}`} alt={`${dogName}_${index}`} />
					))}
				</div>
			</div>
			<div className={Styles.actions}>
				<button onClick={handleSteps(-1)}>
					<Icon name="down" height={20} width={20} />
				</button>
				<button onClick={handleSteps(1)}>
					<Icon name="down" height={20} width={20} />
				</button>
			</div>
		</div>
	)
}

export default DogCardMedia
