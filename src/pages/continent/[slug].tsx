import { useMemo } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { Box, Flex, Image, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import axios from 'axios'

import { Header } from "../../components/Header";
import { CitiesOfTopCentury } from "../../components/CitiesOfTopCentury";

interface ContinentCity {
	id: number
	name: string
	country: string
	flag_url: string
}

interface ContinentCitiesOfTopCenturyData {
	total: number
	cities: ContinentCity[]
}

interface ContinentAboutData {
	longDescription: string
	countries: number
	languages: number
	citiesOfTopCentury: ContinentCitiesOfTopCenturyData
}

interface ContinentData {
	id: number
	slug: string
	name: string
	about: ContinentAboutData
}

interface ContinentProps {
	continent: ContinentData
}

export default function Continent({ continent }: ContinentProps) {
	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true
	})

	const totalCountries = useMemo(() => {
		return continent.about.countries.toString().padStart(2, '0')
	}, [continent.about.countries])

	const totalLanguages = useMemo(() => {
		return continent.about.languages.toString().padStart(2, '0')
	}, [continent.about.languages])

	const totalCitiesOfTopCentury = useMemo(() => {
		return continent.about.citiesOfTopCentury.total.toString().padStart(2, '0')
	}, [continent.about.countries])

	return (
		<>
			<Head>
				<title>{continent.name} | worldtrip</title>
			</Head>

			<Flex direction="column">
				<Header />

				<Box
					h={[150, 150, 500]}
					w="100%"
					maxW="1440px"
					mx="auto"
					position="relative"
				>
					<Image
						position="absolute"
						src="/png/europeBackground.png"
						h="100%"
						w="100%"
						top="0"
						left="0"
						right="0"
						bottom="0"
						zIndex="0"
						filter="brightness(0.7)"
					/>
					{isWideVersion ? (
						<Box
							position="absolute"
							bottom="60px"
							left="50%"
							transform="translateX(-50%)"
							w="100%"
							maxW="1120px"
							px="6"
						>
							<Text
								as="h1"
								fontWeight="semibold"
								fontSize="3xl"
								color="gray.50"
							>
								{continent.name}
							</Text>
						</Box>
					) : (
						<Text
							as="h1"
							position="absolute"
							left="50%"
							top="50%"
							transform="translate(-50%, -50%)"
							fontWeight="semibold"
							fontSize={["2xl", "2xl", "3xl"]}
							color="gray.50"
						>
							{continent.name}
						</Text>
					)}
				</Box>

				<Flex direction="column" w="100%" maxW="1120px" p="4" mx="auto">
					<Flex
						as="section"
						flexDirection={["column", "column", "row"]}
						align="center"
						justifyContent={["center", "center", "space-between"]}
						my={["6", "6", "20"]}
					>
						<Text
							fontWeight="normal"
							fontSize={["md", "md", "lg"]}
							color="gray.700"
							maxW={["100%", "100%", "500px"]}
							textAlign="justify"
						>
							{continent.about.longDescription}
						</Text>
						<Stack
							spacing={["0", "0", "10"]}
							mt={["4", "4", "0"]}
							w={!isWideVersion && "100%"}
							direction="row"
							align="center"
							justify={["space-between", "space-between", "normal"]}
						>
							<Stack px="1">
								<Text
									fontWeight="semibold"
									fontSize={["3xl", "3xl", "4xl"]}
									color="yellow.900"
									textAlign={["left", "left", "center"]}
								>
									{totalCountries}
								</Text>
								<Text
									fontWeight={["normal", "normal", "semibold"]}
									fontSize={["md", "md", "lg"]}
									color="gray.700"
								>
									países
								</Text>
							</Stack>
							<Stack px="1">
								<Text
									fontWeight="semibold"
									fontSize={["3xl", "3xl", "4xl"]}
									color="yellow.900"
									textAlign={["left", "left", "center"]}
								>
									{totalLanguages}
								</Text>
								<Text
									fontWeight={["normal", "normal", "semibold"]}
									fontSize={["md", "md", "lg"]}
									color="gray.700"
								>
									línguas
								</Text>
							</Stack>
							<Stack px="1">
								<Text
									fontWeight="semibold"
									fontSize={["3xl", "3xl", "4xl"]}
									color="yellow.900"
									textAlign={["left", "left", "center"]}
								>
									{totalCitiesOfTopCentury}
								</Text>
								<Text
									fontWeight={["normal", "normal", "semibold"]}
									fontSize={["md", "md", "lg"]}
									color="gray.700"
								>
									cidades +100
								</Text>
							</Stack>
						</Stack>
					</Flex>

					<Box as="section">
						<Text
							color="gray.700"
							fontSize={["2xl", "2xl", "3xl"]}
							fontWeight="medium"
						>
							Cidades +100
						</Text>

						<CitiesOfTopCentury
							cities={continent.about.citiesOfTopCentury.cities}
						/>
					</Box>
				</Flex>
			</Flex>
		</>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [],
		fallback: 'blocking'
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { slug } = params

	const response = await axios.get(`http://localhost:3000/api/continents/${slug}`)

	return {
		props: {
			continent: response.data
		},
		revalidate: 1
	}
}