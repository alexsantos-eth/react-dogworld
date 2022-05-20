// REACT
import React from 'react'

// COMPONENTS
import Icon from 'components/icon'

// STYLES
import Styles from './style.module.scss'

const Topbar: React.FC = () => {
	return (
		<div className={Styles.container}>
			<div>
				<Icon name="search" height={25} width={25} />
				<input className={Styles.search} type="search" placeholder="Buscar familia" />
			</div>
			<button>
				<Icon name="account" height={30} width={30} />
			</button>
		</div>
	)
}

export default Topbar
