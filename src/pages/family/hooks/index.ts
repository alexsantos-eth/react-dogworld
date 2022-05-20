import { useEffect, useState } from 'react'

interface DogBread {
	name: string
	url: string
}

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
