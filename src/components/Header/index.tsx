import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FiChevronLeft } from 'react-icons/fi'
import { Flex, Icon, IconButton, Image } from "@chakra-ui/react";

export function Header() {
	const [showBackButton, setShowBackButton] = useState(false)
	const { asPath, back } = useRouter()

	useEffect(() => {
		if (asPath !== '/') {
			setShowBackButton(true)
		} else {
			setShowBackButton(false)
		}
	}, [asPath])

	return (
		<Flex
			as="header"
			w="100%"
			maxW="1120px"
			h={["12", "12", "20"]}
			mx="auto"
			px="6"
			align="center"
		>
			{showBackButton && (
				<IconButton
					aria-label="Arrow left"
					icon={<Icon
						as={FiChevronLeft}
						color="gray.700"
						h={["5", "5", "8"]}
						w={["5", "5", "8"]}
					/>}
					onClick={back}
					bg="transparent"
					_hover={{ color: 'gray.700' }}
					_active={{ background: 'transparent' }}
				/>
			)}
			<Image
				src="/svg/logo.svg"
				alt="worldtrip"
				maxW={[90, 90, 184]}
				mx="auto"
			/>
		</Flex>
	)
}