import React from 'react'

// STYLES
import Styles from './style.module.scss'

const DogFamilySkeleton: React.FC = () => {
	return (
		<div className={Styles.container}>
			<div className={Styles.image}>
				<span />
			</div>
			<div className={Styles.content}>
				<span />
				<span />
			</div>
		</div>
	)
}

export default DogFamilySkeleton
