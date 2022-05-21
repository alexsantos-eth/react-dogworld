import React, { useState } from 'react'

// COMPONENTS
import Icon from 'components/icon'

// HOOKS
import { useParams, useSearchParams } from 'react-router-dom'
import useDogsImages from './hooks'

// STYLES
import Styles from './style.module.scss'

const DogCardMedia: React.FC<DogCardMediaProps> = ({ options }) => {
	// SLIDER
	const [step, setStep] = useState<number>(0)

	// PARAMS
	const params = useParams()
	const dogFamily = params.dogFamily ?? options?.family

	// SEARCH
	const [search] = useSearchParams()

	// SEARCH PARAMS
	const dogName: string | undefined = search.get('dogName') ?? options?.dogName
	const openDialog: boolean = options?.like ? true : search.get('show') === '1'

	// HOOKS
	const dogImages = useDogsImages(dogFamily, dogName, openDialog)
	const imagesLength = dogImages?.length ?? 1

	// MANAGE STEPS
	const handleSteps = (newStep: number) => () =>
		setStep(Math.max(0, Math.min(step + newStep, imagesLength - 1)))

	return (
		<div className={Styles.image}>
			<div className={Styles.slider}>
				<div
					className={Styles.images}
					style={{
						width: `${imagesLength * 100}%`,
						transform: `translateX(-${step * (100 / imagesLength)}%)`,
					}}
				>
					{dogImages?.map((url: string, index: number) => (
						<img
							src={url}
							key={`${dogName}_${index}`}
							alt={`${dogName}_${index}`}
							style={{ width: `${100 / imagesLength}%` }}
						/>
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
