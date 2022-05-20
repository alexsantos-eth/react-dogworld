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
				<input className={Styles.search} type="search" placeholder="Buscar raza" />
			</div>
			<button>
				<Icon name="moon" height={20} width={20} />
			</button>
		</div>
	)
}

export default Topbar
