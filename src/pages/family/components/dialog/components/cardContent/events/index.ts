/**
 * Save dog like
 * @param  {React.Dispatch<React.SetStateAction<boolean>>} setLike
 * @param  {string} family?
 * @param  {string|null} dogName?
 */
const toggleLikeDog = (
	setLike: React.Dispatch<React.SetStateAction<boolean>>,
	family?: string,
	dogName?: string | null,
) => {
	// TOGGLE
	setLike((prevLike) => {
		window.localStorage.setItem(
			'like',
			JSON.stringify({
				noBread: family === dogName,
				like: !prevLike,
				family,
				dogName,
			}),
		)
		return !prevLike
	})
}

export default toggleLikeDog
