/**
 * Dog card props
 */
interface DogCardProps {
	dog: DogBread // DogBread props
}

/**
 * Dog family bread
 */
interface DogBread {
	noBread?: boolean // This family does not have a sub bread
	name: string // Dog name
	url: string // Image url
}
