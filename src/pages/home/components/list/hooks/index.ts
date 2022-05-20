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
				setDogList(data?.message ? Object.keys(data.message) : undefined)
			})
	}, [])

	return dogList
}

export default useDogsList
