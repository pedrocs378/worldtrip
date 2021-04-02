import Head from "next/head";
import { Box, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";

import { Header } from "../../components/Header";

export default function Continent() {

	return (
		<>
			<Head>
				<title>Europa | worldtrip</title>
			</Head>

			<Flex direction="column">
				<Header />

				<Box w="100%" maxW="1440px" mx="auto" position="relative" h={500}>
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
							Europa
						</Text>
					</Box>
				</Box>

				<Flex direction="column" w="100%" maxW="1120px" p="6" mx="auto">
					<Flex align="center" justify="space-between" my="20">
						<Text
							fontWeight="normal"
							fontSize="md"
							color="gray.700"
							maxW="500px"
							textAlign="justify"
						>
							A Europa é, por convenção, um dos seis continentes do mundo.
							Compreendendo a península ocidental da Eurásia, a
							Europa geralmente divide-se da Ásia a leste pela divisória de
							águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso,
							e o mar Negro a sudeste.
						</Text>
						<Stack spacing="10" direction="row" align="center">
							<Stack spacing="1">
								<Text
									fontWeight="semibold"
									fontSize="3xl"
									color="yellow.900"
									textAlign="center"
								>
									50
								</Text>
								<Text
									fontWeight="semibold"
									fontSize="lg"
									color="gray.700"
								>
									países
								</Text>
							</Stack>
							<Stack>
								<Text
									fontWeight="semibold"
									fontSize="3xl"
									color="yellow.900"
									textAlign="center"
								>
									60
								</Text>
								<Text
									fontWeight="semibold"
									fontSize="lg"
									color="gray.700"
								>
									línguas
								</Text>
							</Stack>
							<Stack>
								<Text
									fontWeight="semibold"
									fontSize="3xl"
									color="yellow.900"
									textAlign="center"
								>
									27
								</Text>
								<Text
									fontWeight="semibold"
									fontSize="lg"
									color="gray.700"
								>
									cidades +100
								</Text>
							</Stack>
						</Stack>
					</Flex>

				</Flex>
			</Flex>
		</>
	)
}