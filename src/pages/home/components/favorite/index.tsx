import React from 'react'

// COMPONENTS
import DogFavoriteCard from './components/card'
import NotFound from './components/notFound'

const FavoriteDog = () => {
	// LOCALDATA
	const likeStorage = window.localStorage.getItem('like')
	const localDog: LocalDog = likeStorage ? JSON.parse(likeStorage) : undefined

	// OPEN LIKED
	const openLike = localDog && localDog.like

	return <div>{openLike ? <DogFavoriteCard /> : <NotFound />}</div>
}

export default FavoriteDog
