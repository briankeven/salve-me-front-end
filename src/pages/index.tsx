import { Flex, Text, Image, Box, useBreakpointValue } from '@chakra-ui/react'
import { Header } from '../components/Header'


export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  const maxWidhtValues = useBreakpointValue({
    base: 720,
    md: 800,
    lg: 1230,
  })

  return (
    <>
      <Box w='100%'>
        <Header />
      </Box>
      <Flex 
        justify='space-between'
        align='center'
        direction={['column-reverse', 'column-reverse', 'column-reverse', 'row']}
        maxW={maxWidhtValues}
        w='720'
        m='0 auto'
      >
        <Text fontSize={['3xl','3xl','6xl']} fontWeight='bold' ml='4'>
          
          {
            isWideVersion && 
              <Text fontSize='medium' fontWeight='light'>
              📚   Hey Seja Bem-vindo!
              </Text>
          }
          
          Sua {isWideVersion &&<br/>}
          Plataforma Que<br/> 
          Te <Text as='span' color='purple.500'>Salva</Text> Nos {isWideVersion && <br/>}
          Estudos.
        </Text>

        <Image 
          src='/images/homeImg.svg'
          alt='Home Image'
          boxSize={['200px', '300px', '500px', '800px']}
          ml={['0','12']}
        />
        
      </Flex>
    </>
  )
}
