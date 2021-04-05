import { Button, Image, Stack, Text } from "@chakra-ui/react";
import Link from 'next/link'

interface SlideContentProps {
	destinationUrl: string
	title: string
	description: string
	imageUrl: string
}

export function SlideContent({ destinationUrl, title, description, imageUrl }: SlideContentProps) {

	return (
		<Link href={`/continent/${destinationUrl}`} passHref>
			<Button as="a" p="0" h="450px" w="100%" position="relative">
				<Image
					src={imageUrl}
					alt={title}
					h="100%"
					w="100%"
					filter="brightness(0.6)"
				/>
				<Stack
					spacing="4"
					position="absolute"
					top="50%"
					left="50%"
					transform="translate(-50%, -50%)"
				>
					<Text
						as="strong"
						color="gray.50"
						fontSize={["2xl", "2xl", "3xl"]}
						textAlign="center"
					>
						{title}
					</Text>
					<Text
						color="gray.100"
						fontWeight="bold"
						fontSize={["sm", "sm", "lg"]}
						display="flex"
					>
						{description}
					</Text>
				</Stack>
			</Button>
		</Link>
	)
}