import Head from "next/head";
import { Divider, Flex, Image, Stack, Text, useBreakpointValue, UnorderedList, ListItem, ListIcon, List } from "@chakra-ui/react";
import { IoEllipse } from 'react-icons/io5'

import { Header } from "../components/Header";
import { TravelType } from "../components/TravelType";
import { TravelSlider } from "../components/TravelSlider";

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <>
      <Head>
        <title>worldtrip</title>
      </Head>

      <Flex direction="column">
        <Header />

        <Flex
          w="100%"
          maxW="1440px"
          mx="auto"
          py="8"
          backgroundImage="url(/svg/banner.svg)"
        >
          <Flex
            mx="auto"
            maxW="1160px"
            width="100%"
            px="8"
            align="center"
            justify={isWideVersion ? "space-between" : "center"}
            zIndex="1"
          >
            <Stack spacing="5">
              <Text
                as="h1"
                color="gray.50"
                fontSize={["2xl", "2xl", "3xl"]}
                fontWeight="medium"
              >
                5 Continentes, <br /> infinitas possibilidades.
              </Text>
              <Text
                color="gray.100"
                fontWeight="normal"
                fontSize={["sm", "sm", "md"]}
                maxW={["", "", "480px"]}
              >
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.
              </Text>
            </Stack>
            {isWideVersion && (
              <Image
                src="/svg/airplane.svg"
                maxW={["2xl", "4xl"]}
                mb="-60px"
              />
            )}
          </Flex>
        </Flex>

        <Flex w="100%" maxW="1160px" mx="auto" mt="20" flexDirection="column">

          {isWideVersion ? (
            <Stack
              flex="1"
              direction="row"
              justify="space-between"
              px="8"
            >
              <TravelType title="vida noturna" imageSrc="/svg/cocktail.svg" />
              <TravelType title="praia" imageSrc="/svg/surf.svg" />
              <TravelType title="moderno" imageSrc="/svg/building.svg" />
              <TravelType title="clássico" imageSrc="/svg/museum.svg" />
              <TravelType title="e mais..." imageSrc="/svg/earth.svg" />
            </Stack>
          ) : (
            <List
              px="8"
              display="flex"
              alignItems="center"
              justifyContent="space-around"
              flexWrap="wrap"
            >
              <ListItem mb="7" display="flex" alignItems="center">
                <ListIcon as={IoEllipse} color="yellow.900" />
                <TravelType title="vida noturna" />
              </ListItem>
              <ListItem mb="7" display="flex" alignItems="center">
                <ListIcon as={IoEllipse} color="yellow.900" />
                <TravelType title="praia" />
              </ListItem>
              <ListItem mb="7" display="flex" alignItems="center">
                <ListIcon as={IoEllipse} color="yellow.900" />
                <TravelType title="moderno" />
              </ListItem>
              <ListItem mb="7" display="flex" alignItems="center">
                <ListIcon as={IoEllipse} color="yellow.900" />
                <TravelType title="clássico" />
              </ListItem>
              <ListItem mb="7" display="flex" alignItems="center">
                <ListIcon as={IoEllipse} color="yellow.900" />
                <TravelType title="e mais..." />
              </ListItem>
            </List>
          )}

          <Divider
            my={["10", "10", "20"]}
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
            fontSize={["xl", "xl", "2xl"]}
          >
            Vamos nessa? <br /> Então escolha seu continente
          </Text>

          <TravelSlider />
        </Flex>
      </Flex>
    </>
  )
}
