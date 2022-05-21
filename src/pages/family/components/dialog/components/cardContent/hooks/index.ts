import { useEffect } from 'react'

/**
 * Load like from local
 * @param  {React.Dispatch<React.SetStateAction<boolean>>} setLike
 * @param  {string} family?
 * @param  {string|null} dogName?
 */
const useDogLike = (
	setLike: React.Dispatch<React.SetStateAction<boolean>>,
	family?: string,
	dogName?: string | null,
) => {
	useEffect(() => {
		// READ LOCAL
		const localData = window.localStorage.getItem('like')
		const dogData: LocalDog | undefined = localData ? JSON.parse(localData) : undefined

		// UPDATE
		setLike((family === dogData?.family && dogName === dogData?.dogName && dogData?.like) ?? false)
	}, [family, dogName])
}

export default useDogLike
