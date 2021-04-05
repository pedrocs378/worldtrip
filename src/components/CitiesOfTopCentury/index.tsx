import { Flex } from "@chakra-ui/react";

import { CityCard } from "./CityCard";

interface City {
	id: number
	name: string
	country: string
	flag_url: string
}

interface CitiesOfTopCenturyProps {
	cities: City[]
}

export function CitiesOfTopCentury({ cities }: CitiesOfTopCenturyProps) {

	return (
		<Flex
			mt={["5", "5", "10"]}
			align="center"
			justify={["center", "center", "space-between"]}
			flexWrap="wrap"
		>
			{cities.map(city => {
				return (
					<CityCard
						key={city.id}
						imageSrc="/png/londonCard.png"
						name={city.name}
						country={city.country}
						flag={city.flag_url}
					/>
				)
			})}
		</Flex>
	)
}