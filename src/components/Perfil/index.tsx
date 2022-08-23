
import { Flex, Text, Box, Avatar, VStack, StackDivider } from '@chakra-ui/react'

import { BoxContent } from "../../components/BoxContent";
import { Header } from "../../components/Header";
import { UpdatePerfil } from '../../pages/perfil/UpdatePerfil';


export default function Profile({props}) {

    return (
        <>
           { props.whats ?(
                <Header/>
            ): (<Text 
                    fontWeight='bold' 
                    fontSize='2xl' 
                    mt='50px' 
                    display='flex'
                    justifyContent='center'
                    > 
                    Atualize seus Dados para continuar.
                </Text>) }
            
            <Flex
                maxW={1380}
                m='0 auto'
                h='100vh - 80px'
                align='center'
                direction='column'
            >
                <BoxContent title='Perfil' boxHeight='3xl'>
                    <Flex 
                        direction='row'
                        justify='space-between'
                        m='0 20px'
                    >  
                        <Box
                            w='300px'
                            position='absolute'
                            right='12%'
                            alignItems='center'
                        >
                            <Text mt='2.5px'>Você possui <Text fontWeight='bold' fontSize='lg' as='span' color='purple.300'> {props.like} </Text> likes.</Text>
                        </Box>

                        <Box
                            w='100%'
                        >
                            <Avatar
                              name={props.name}
                              src={props.photo}
                              size='xl'
                              mt='3px'
                            />
                        </Box>
                        
                    </Flex>
                    <Text fontWeight='bold' fontSize='2xl' mt='10px'> Meus Dados </Text>
                    
                    <Box
                      h='60%'
                      w='80%'
                      display='flex'
                      bg='purple.400'
                      borderRadius='3xl'
                    >
                        <Box
                          h='100%'
                          w='40%'
                          flexDir='column'
                          paddingLeft={6}
                          paddingTop={5}
                          fontWeight='bold'
                        >
                           <VStack
                             divider={<StackDivider borderColor='gray.400'/>}
                             spacing='30px'
                             mt='20px'
                             display='flex'
                             alignItems='flex-start'
                           >
                                <Text>Nome</Text>
                                <Text>Email</Text>
                                <Text>Cidade</Text>
                                <Text>Estado</Text>
                                <Text>WhatsApp</Text>
                            </VStack>
                        </Box>

                        <Box
                          h='100%'
                          w='60%'
                          p='5 0'
                          flexDir='column'
                          paddingTop={5}
                          paddingRight={6}
                          fontWeight='thin'
                        >
                            <VStack
                              divider={<StackDivider borderColor='gray.400'/>}
                              spacing='30px'
                              mt='20px'
                              display='flex'
                              alignItems='flex-start'
                            >
                                <Text>{props.name}</Text>
                                <Text>{props.email}</Text>
                                <Text>{props.city}</Text>
                                <Text>{props.country}</Text>
                                <Text>{props.whats}</Text>
                            </VStack>
                        </Box>
                    </Box>
                    <UpdatePerfil /> 
                </BoxContent>
            </Flex>
        </>
    )
}