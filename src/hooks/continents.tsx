import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import axios from 'axios'

interface Continent {
	id: number
	slug: string
	name: string
	description: string
	landscape_cover_url: string
}

interface ContinentsProviderProps {
	children: ReactNode
}

const ContinentsContext = createContext<Continent[]>([])

export function ContinentsProvider({ children }: ContinentsProviderProps) {
	const [continents, setContinents] = useState<Continent[]>([])

	useEffect(() => {
		axios.get('/api/continents').then(response => {
			setContinents(response.data)
		})
	}, [])

	return (
		<ContinentsContext.Provider value={continents}>
			{children}
		</ContinentsContext.Provider>
	)
}

export const useContinents = () => useContext(ContinentsContext)