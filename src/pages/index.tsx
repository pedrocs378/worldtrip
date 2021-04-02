import Head from "next/head";
import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";

import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>worldtrip</title>
      </Head>

      <Flex direction="column" h="100vh" w="100vw">
        <Header />

        <Flex
          h={335}
          position="relative"
        >
          <Image
            src="/svg/banner.svg"
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
            maxW="1120px"
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
      </Flex>
    </>
  )
}
