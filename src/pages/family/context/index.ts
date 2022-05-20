import { createContext } from 'react'

interface DogFamilyContext {
	handleDialog: (dogName: string, open: boolean) => () => void
}

const defDogFamilyContext: DogFamilyContext = {
	handleDialog: () => () => {},
}

const DogFamilyContext: React.Context<DogFamilyContext> = createContext(defDogFamilyContext)
export default DogFamilyContext
