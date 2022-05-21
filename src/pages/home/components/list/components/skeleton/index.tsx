import React from 'react'

// STYLES
import Styles from './style.module.scss'

const DogListSkeleton: React.FC = () => {
	return (
		<li className={Styles.container}>
			<span />
			<div />
		</li>
	)
}

export default DogListSkeleton
