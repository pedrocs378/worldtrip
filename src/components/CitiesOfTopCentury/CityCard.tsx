import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";

interface CityCardProps {
	name: string
	country: string
	flag: string
	imageSrc: string
}

export function CityCard({ name, country, flag, imageSrc }: CityCardProps) {

	return (
		<Box
			h="279px"
			w="256px"
			mb={["5", "5", "12"]}
		>
			<Image
				src={imageSrc}
				alt={name}
				w="100%"
				h="60%"
				borderTopLeftRadius="4px"
				borderTopRightRadius="4px"
			/>
			<Flex
				h="40%"
				bg="white"
				px="6"
				align="center"
				justify="space-between"
				borderBottom="1px"
				borderLeft="1px"
				borderRight="1px"
				borderColor="yellow.100"
				borderBottomLeftRadius="4px"
				borderBottomRightRadius="4px"
			>
				<Stack spacing="3">
					<Text
						color="gray.700"
						fontSize="lg"
						fontWeight="semibold"
						lineHeight="6"
					>
						{name}
					</Text>
					<Text
						color="gray.500"
						fontSize="sm"
						fontWeight="400"
						lineHeight="7"
					>
						{country}
					</Text>
				</Stack>
				<Image
					alt={country}
					src={flag}
					h="30px"
					w="30px"
					borderRadius="15px"
				/>
			</Flex>
		</Box>
	)
}