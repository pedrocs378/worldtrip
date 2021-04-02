import { Image, Stack, Text } from "@chakra-ui/react";

interface TravelTypeProps {
	title: string
	image: string
}

export function TravelType({ title, image }: TravelTypeProps) {

	return (
		<Stack display="flex" spacing="6" align="center">
			<Image
				src={`/svg/${image}.svg`}
				alt={image}
				h={85}
				w={85}
			/>
			<Text fontWeight="semibold" fontSize="lg">{title}</Text>
		</Stack>
	)
}