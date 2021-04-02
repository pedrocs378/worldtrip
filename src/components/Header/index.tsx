import { Flex, Image } from "@chakra-ui/react";

export function Header() {

	return (
		<Flex
			as="header"
			w="100%"
			maxW="1120px"
			h="20"
			mx="auto"
			px="6"
		>
			<Image
				src="/svg/logo.svg"
				maxW={184}
				mx="auto"
			/>
		</Flex>
	)
}