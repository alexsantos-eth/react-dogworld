import { NavigateFunction } from 'react-router-dom'

/**
 * Show bread dialog
 * @param  {NavigateFunction} navigate
 * @param  {string} dogName
 * @param  {boolean} open
 * @param  {string} family
 */
const handleDogBread = (
	navigate: NavigateFunction,
	dogName: string,
	open: boolean,
	family?: string,
) => {
	// BUILD URL
	const url = new URLSearchParams()
	url.append('dogName', encodeURIComponent(dogName))
	url.append('show', open ? '1' : '0')

	navigate({
		pathname: `/family/${family}`,
		search: url.toString(),
	})
}

export default handleDogBread
