import { Box, Image, Stack, Text } from "@chakra-ui/react";

interface SlideContentProps {
	title: string
	description: string
	imageUrl: string
}

export function SlideContent({ title, description, imageUrl }: SlideContentProps) {

	return (
		<Box h="450px" position="relative">
			<Image
				src={imageUrl}
				alt={title}
				h="100%"
				w="100%"
				filter="brightness(0.5)"
			/>
			<Stack
				spacing="4"
				position="absolute"
				top="50%"
				left="50%"
				transform="translate(-50%, -50%)"
			>
				<Text
					color="gray.50"
					fontWeight="bold"
					fontSize="3xl"
					textAlign="center"
				>
					{title}
				</Text>
				<Text
					color="gray.100"
					fontWeight="bold"
					fontSize="lg"
				>
					{description}
				</Text>
			</Stack>
		</Box>
	)
}