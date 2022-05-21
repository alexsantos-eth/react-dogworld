import { useEffect, useState } from 'react'

/**
 * Get Images Hook
 * @param  {string} family?
 * @param  {string|null} dogName?
 * @param  {boolean} openDialog
 * @returns {string[] | undefined}
 */
const useDogsImages = (
	family?: string,
	dogName?: string | null,
	openDialog?: boolean,
): string[] | undefined => {
	// LIST
	const [dogList, setDogList] = useState<string[] | undefined>()

	// GET LIST
	useEffect(() => {
		if (family && dogName)
			if (openDialog) {
				// WITHOUT SUB BREAD
				const noBread: boolean = family === dogName
				fetch(
					`https://dog.ceo/api/breed/${noBread ? family : `${family}/${dogName}`}/images/random/5`,
					{
						method: 'GET',
					},
				)
					.then((req) => req.json())
					.then((data) => {
						// UNDEFINED DATA
						if (!data) {
							console.warn('[Error] empty data getting images')
							return
						}

						// ERROR AT SERVER
						if (data?.status !== 'success') {
							console.warn('[Error] getting images')
							return
						}

						// LIMIT
						const images = data.message
						if (images.length > 5) images.length = 5
						setDogList(images)
					})
					.catch((err) => {
						if (err) console.warn('[Error] getting images', err)
						return
					})
			} else setDogList(undefined)
	}, [family, dogName, openDialog])

	return dogList
}

export default useDogsImages
