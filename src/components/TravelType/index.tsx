import { Image, Stack, Text } from "@chakra-ui/react";

interface TravelTypeProps {
	title: string
	imageSrc?: string
}

export function TravelType({ title, imageSrc = null }: TravelTypeProps) {

	if (imageSrc) {
		return (
			<Stack
				spacing="6"
				align="center"
			>
				<Image
					src={imageSrc}
					alt={title}
					h={85}
					w={85}
				/>
				<Text fontWeight={["medium", "medium", "semibold"]} fontSize={["md", "md", "lg"]}>
					{title}
				</Text>
			</Stack>
		)
	} else {
		return (
			<Text fontWeight={["medium", "medium", "semibold"]} fontSize={["md", "md", "lg"]}>
				{title}
			</Text>
		)
	}
}