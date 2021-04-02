import Head from "next/head";
import { Box, Divider, Flex, Image, Stack, Text } from "@chakra-ui/react";


import { Header } from "../components/Header";
import { TravelType } from "../components/TravelType";
import { TravelSlider } from "../components/TravelSlider";

export default function Home() {
  return (
    <>
      <Head>
        <title>worldtrip</title>
      </Head>

      <Flex direction="column">
        <Header />

        <Flex
          h={335}
          position="relative"
        >
          <Image
            src="/svg/banner.svg"
            alt="Airplane"
            mx="auto"
            h="100%"
            position="absolute"
            right="0"
            left="0"
            top="0"
            bottom="0"
            zIndex="0"
          />
          <Flex
            mx="auto"
            maxW="1480px"
            align="center"
            justify="space-between"
            zIndex="1"
          >
            <Stack spacing="5">
              <Text
                as="h1"
                color="gray.50"
                fontSize="3xl"
                fontWeight="medium"
              >
                5 Continentes, <br /> infinitas possibilidades.
                </Text>
              <Text
                color="gray.100"
                fontWeight="normal"
                fontSize="md"
                maxW="480px"
              >
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                </Text>
            </Stack>
            <Image
              src="/svg/airplane.svg"
              maxW={["2xl", "4xl"]}
              mb={-120}
            />
          </Flex>
        </Flex>

        <Flex w="100%" maxW="1480" mx="auto" mt="20" flexDirection="column">
          <Stack
            flex="1"
            direction="row"
            justify="space-between"
            px="8"
          >
            <TravelType title="vida noturna" image="cocktail" />
            <TravelType title="praia" image="surf" />
            <TravelType title="moderno" image="building" />
            <TravelType title="clássico" image="museum" />
            <TravelType title="e mais..." image="earth" />
          </Stack>

          <Divider
            my="20"
            w="20"
            colorScheme="whiteAlpha"
            borderWidth={2}
            borderRadius={4}
            variant="solid"
            mx="auto"
          />

          <Text
            mx="auto"
            textAlign="center"
            fontWeight="medium"
            fontSize="2xl"
          >
            Vamos nessa? <br /> Então escolha seu continente
          </Text>

          <TravelSlider />
        </Flex>
      </Flex>
    </>
  )
}
