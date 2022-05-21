import { useEffect, useState } from 'react'

/**
 * Get list hook
 * @returns
 */
const useDogsList = () => {
	// LIST
	const [dogList, setDogList] = useState<string[] | undefined>()

	// GET LIST
	useEffect(() => {
		fetch('https://dog.ceo/api/breeds/list/all', {
			method: 'GET',
		})
			.then((req) => req.json())
			.then((data) => {
				// UNDEFINED DATA
				if (!data) {
					console.warn('[Error] empty data getting list')
					return
				}

				// ERROR AT SERVER
				if (data?.status !== 'success') {
					console.warn('[Error] getting list')
					return
				}

				// GET AT TIME
				setDogList(Object.keys(data.message))
			})
			.catch((err) => {
				if (err) console.warn('[Error] getting list', err)
				return
			})
	}, [])

	return dogList
}

export default useDogsList
