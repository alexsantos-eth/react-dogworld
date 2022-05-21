import { useContext } from 'react'

// CONTEXT
import DogContext, { DogFamilyContext } from '../context'

/**
 * Load family context
 * @returns {DogFamilyContext}
 */
const useDogCtx = (): DogFamilyContext => {
	const dogFamilyCtx = useContext(DogContext)
	return dogFamilyCtx
}

export default useDogCtx
