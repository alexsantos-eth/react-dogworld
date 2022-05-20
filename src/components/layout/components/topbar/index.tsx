// REACT
import React from 'react'

// STYLES
import Styles from './style.module.scss'

const Topbar: React.FC = () => {
	return (
		<div className={Styles.container}>
			<div>
				<span data-feather="search" />
				<input className={Styles.search} type="search" placeholder="Buscar familia" />
			</div>
			<button>
				<span data-feather="user" />
			</button>
		</div>
	)
}

export default Topbar
