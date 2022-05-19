// REACT
import React from 'react'
import ReactDOM from 'react-dom/client'

// COMPONENTS
import App from 'components/app'

// GLOBAL STYLES
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
)
