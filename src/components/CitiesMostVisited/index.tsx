import { Flex } from "@chakra-ui/react";

import { CityCard } from "./CityCard";

export function CitiesMostVisited() {

	return (
		<Flex mt="10" align="center" justify="space-between" flexWrap="wrap">
			<CityCard
				image="londonCard"
				name="Londres"
				country="Reino Unido"
				flag="londonFlag"
			/>
			<CityCard
				image="londonCard"
				name="Paris"
				country="França"
				flag="franceFlag"
			/>
			<CityCard
				image="londonCard"
				name="Roma"
				country="Itália"
				flag="italyFlag"
			/>
			<CityCard
				image="londonCard"
				name="Praga"
				country="República Tcheca"
				flag="republicFlag"
			/>
			<CityCard
				image="londonCard"
				name="Amsterdã"
				country="Holanda"
				flag="netherlandsFlag"
			/>
		</Flex>
	)
}