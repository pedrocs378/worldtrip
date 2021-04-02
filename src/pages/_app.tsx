import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import { ContinentsProvider } from '../hooks/continents'

import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ContinentsProvider>
        <Component {...pageProps} />
      </ContinentsProvider>
    </ChakraProvider>
  )
}

export default MyApp
