import feather from 'feather-icons'
import { useEffect } from 'react'

/**
 * Start feather icons
 */
const useIcons = () => {
	useEffect(() => {
		feather.replace()
	}, [])
}

export default useIcons
