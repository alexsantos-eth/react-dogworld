// REACT
import React from 'react'

const Topbar: React.FC = () => {
	return (
		<div>
			<span data-feather="search" />
			<input type="search" placeholder="Buscar familia de perros" />
		</div>
	)
}

export default Topbar
