import { useContext } from 'react'

// CONTEXT
import DogFamilyContext from '../context'

const useDogCtx = () => {
	const dogFamilyCtx = useContext(DogFamilyContext)
	return dogFamilyCtx
}

export default useDogCtx
