import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react'
import { Provider as NexAuthProvider } from 'next-auth/client'
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <NexAuthProvider session={pageProps.session}>
      <ChakraProvider theme={theme}>
        
          <Component {...pageProps} />

      </ChakraProvider>
    </NexAuthProvider>
  )
}

export default MyApp;