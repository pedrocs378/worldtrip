import { Flex } from "@chakra-ui/react";

import { CityCard } from "./CityCard";

interface City {
	id: number
	name: string
	country: string
}

interface CitiesOfTopCenturyProps {
	cities: City[]
}

export function CitiesOfTopCentury({ cities }: CitiesOfTopCenturyProps) {

	return (
		<Flex mt="10" align="center" justify="space-between" flexWrap="wrap">
			{cities.map(city => {
				return (
					<CityCard
						key={city.id}
						image="londonCard"
						name={city.name}
						country={city.country}
						flag="londonFlag"
					/>
				)
			})}
		</Flex>
	)
}