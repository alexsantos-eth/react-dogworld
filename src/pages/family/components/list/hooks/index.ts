import { useEffect, useState } from 'react'

/**
 * Dog family hook
 * @param  {string} name
 */
const useDogFamily = (name: string) => {
	// LIST
	const [familyList, setFamilyList] = useState<DogBread[] | undefined>()

	// GET LIST
	useEffect(() => {
		fetch(`https://dog.ceo/api/breed/${name}/list`, { method: 'GET' })
			.then((req) => req.json())
			.then((data) => {
				// UNDEFINED DATA
				if (!data) {
					console.warn('[Error] empty data getting ', name)
					return
				}

				// ERROR AT SERVER
				if (data?.status !== 'success') {
					console.warn(`[Error] getting ${name}`, data)
					return
				}

				// EMPTY ARRAY
				if (data.message.length === 0) {
					// GET RANDOM IMAGE
					fetch(`https://dog.ceo/api/breed/${name}/images/random`)
						.then((req) => req.json())
						.then((imageData) => {
							// UNDEFINED DATA
							if (!imageData) {
								console.warn('[Error] empty image data getting ', name)
								return
							}

							// ERROR AT SERVER
							if (imageData?.status !== 'success') {
								console.warn(`[Error] getting ${name} image`, data)
								return
							}

							// UPDATE IMAGE
							setFamilyList([{ name, url: imageData.message, noBread: true }])
						})
					return
				}

				// CREATE A LIST OF IMAGE REQUESTS
				const reqImages: Promise<DogBread>[] = data.message?.map(
					async (dog: string): Promise<DogBread> => {
						try {
							const imageReq = await fetch(
								`https://dog.ceo/api/breed/${name}/${dog}/images/random`,
								{ method: 'GET' },
							)
							const imageURL = await imageReq.json()
							return { name: dog, url: imageURL?.message ?? '' }
						} catch (err) {
							if (err) console.warn(`[Error] getting ${name} images`, err)
							return { name: '', url: '' }
						}
					},
				)

				// RESOLVE
				Promise.all(reqImages).then(setFamilyList)
			})
			.catch((err) => {
				if (err) console.warn(`[Error] getting ${name}`, err)
				setFamilyList(undefined)
			})
	}, [])

	return familyList
}

export default useDogFamily
