import Head from "next/head";
import { Flex, Image, Text } from "@chakra-ui/react";

import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>worldtrip</title>
      </Head>

      <Flex direction="column" h="100vh">
        <Header />

        <Flex
          bgImage="/svg/banner.svg"
        >

          <Flex>

          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
