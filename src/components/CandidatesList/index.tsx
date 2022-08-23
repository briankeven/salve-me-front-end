import React, { useEffect, useState } from 'react';
import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, HStack, VStack, Text, Avatar, Button} from '@chakra-ui/react';

import { FiUsers } from 'react-icons/fi'

import { ButtonPosts } from '../ButtonPosts'
import { Candidate } from './Candidate';

import api from '../../services/api';

interface CandidatesListProps {
    id: number;
    name: string;
    avatar_url: string;
    like: number;
}

export function CandidatesList({props}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [candidatos, setCandidatos] = useState([]);

    const duvida_id = props.duvida_id;
    
    async function value(e){
        e.preventDefault();
        api.get(`/candidatar/${duvida_id}`).then(response => {
            setCandidatos(response.data)
        });
    };
    
    return(
        <>
            <ButtonPosts
              icon={FiUsers}
              iconColor='black'
              iconSize='20'
              variant='unstyled'
              mr='3'
              onClick={onOpen}
            >
                Open
            </ButtonPosts>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                size='sm'
                colorScheme='purple'
                
            >
                <DrawerOverlay />
                <DrawerContent>
                <DrawerCloseButton color='purple.900' />

                <DrawerHeader color='purple.900' fontWeight='bold' fontSize='32'>
                    <HStack spacing='3'>
                        <Button onClick={value}>
                            <FiUsers  />
                            <Text>Candidatos</Text>
                        </ Button>
                    </HStack>
                </DrawerHeader>

                <DrawerBody>
                <VStack spacing='4' color='black' align='flex-start' fontWeight='normal' fontSize='18'>
                    
                    {candidatos.map((candidato) =>(
                       
                        <HStack>
                            <Candidate props={candidato} duvida={duvida_id}/>
                        </HStack>
                    ))}
                
                   
                </VStack>
                </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}