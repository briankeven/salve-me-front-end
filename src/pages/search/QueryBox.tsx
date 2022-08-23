import {Box, Flex, VStack, Avatar, Text, Button, useBreakpointValue} from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { useSession } from "next-auth/client"


import { ProfilePopover } from "./ProfilePopover";

import api from "../../services/api";

export function QueryBox({query}) {
    const [subject, setSubject] = useState('');
    const [format, setFormat] = useState('');
    const [session] = useSession();

    const listSubject = [
        {id: 1, subject: 'Português'},
        {id: 2, subject: 'Matemática'},
        {id: 3, subject: 'Ciência'},
        {id: 4, subject: 'Geografia'},
        {id: 5, subject: 'História'},
    ]

    const listFormat = [
        {id: 1, format: 'Remoto'},
        {id: 2, format: 'Presencial'},
    ]

    const wideSize = useBreakpointValue({
        base: 'md',
        lg: 'lg'
    })

    const wideSizeButton = useBreakpointValue({
        base: 'sm',
        lg: 'lg'
    })

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

   
    useEffect(()=>{
        
        listSubject.map((valor) => {
            if(valor.id == query.subject)
                setSubject(valor.subject)
        });

        listFormat.map((valor)=>{
            if (valor.id == query.format)
                setFormat(valor.format)
        });
    })

    function handleSubmit(e) {
        
        if(!session)
            return alert('Efetue o login para entrar em contato!');
        
        if(session.user.email == query.email)
            return alert('Você não pode entrar em contato com você mesmo!')
            
        api.post('/candidatar', {   
            duvida_id: query.duvida_id,
            email: session.user.email,
        }).then(() => {
            window.location.href = `https://api.whatsapp.com/send?phone=+55${query.whats}&text=Olá sou ${session.user.name} encontrei sua dúvida no Save-Me:${query.description}, queria muito lhe ajudar!`;
            
        }).catch(() => {
            alert('Voce já entrou em contato uma vez!');
        })
        
    };


    return(

        <>

            <Box
                h={['sm', 'sm','xs']}
                w='40vw'
                bg='purple.700'
                borderRadius='8'
                m='4'
            >
                <Flex
                    p={['2','4']}
                    align='center'
                >
                    { isWideVersion && 
                        <Box
                            position='absolute'
                            right='33%'
                        >
                            <Text>{format}</Text>
                        </Box>
                    }
                        <ProfilePopover props = {query}>
                            <Avatar size={wideSize} name={query.name} src={query.photo} />

                            <VStack 
                                spacing={['1','0.1']} 
                                ml='2' 
                                align={['center','flex-start']}
                            >
                                <Text fontSize={['12','22']}>{query.name}</Text>
                                <Text fontSize={['9','14']}>{subject}</Text>
                                <Text fontSize={['9','14']}>{query.title}</Text>

                            </VStack>
                        </ProfilePopover>
                    </Flex>

                    <Text 
                        p='2'
                        align='start'
                        w={'90%'}
                        fontSize='16'
                        borderTop='1px'
                    >
                        {query.description}
                    </Text>

                    <Flex
                    p={['4','4']}
                        mt={['45.5vw','20.5vw','4.5vw']}
                        justify={['center','center','flex-end']}
                    >
                        <Button 
                            colorScheme='whatsapp'
                            onClick={handleSubmit}    
                        >
                            Entrar em contato
                        </Button>
                    </Flex>
            </Box>
        </>
    );
}