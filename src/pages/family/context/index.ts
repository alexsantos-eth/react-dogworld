import { createContext } from 'react'

export interface DogFamilyContext {
	handleDialog: (dogName: string, open: boolean) => () => void
}

const defDogFamilyContext: DogFamilyContext = {
	handleDialog: () => () => {},
}

const DogFamilyCtx: React.Context<DogFamilyContext> = createContext(defDogFamilyContext)
export default DogFamilyCtx
