import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Box
  } from "@chakra-ui/react"
import { useSession } from "next-auth/client"
import { FormEvent, useState } from "react"
import { FiEdit } from "react-icons/fi"

import { ButtonPosts } from "../../components/ButtonPosts"
import { Input } from "../../components/Form/Input"

import api from "../../services/api"

export function UpdatePerfil() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [session]= useSession();

    const [city, setCity]= useState('');
    const [country, setCountry]= useState('');
    const [whats, setWhats]= useState('');
    
    async function handleCreateNewQuery(event: FormEvent) {
      event.preventDefault();
      if(city == '' || country == ''|| whats== '')
        return alert("Campos sem preencher!!!");
      await api.put('/user',{
        city,
        country,
        whats,
        email: session.user.email,
        name: session.user.name,
        image: session.user.image
      })

      onClose();
      
      return alert("Cadastro atualizado com sucesso!")

    }


    return (
      <>
        <ButtonPosts
            text='Alterar Dados'
            icon={FiEdit}
            iconSize='20px'
            iconColor='purple.900'
            mt='20px'
            display='flex'
            alignItems='center'
            onClick={onOpen}            
        />
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <Box>
            <ModalOverlay />
            
            <ModalContent onSubmit={handleCreateNewQuery}>
              
              <ModalHeader
                fontSize='xl'
                color='gray.900'
              >
                Alterar Dados
              </ModalHeader>
              
              <ModalCloseButton color='black' />
              
              <ModalBody
                color='gray.900'
              > 
                
                <Input
                  name='title'
                  type='text'
                  value={city}
                  onChange={event => setCity(event.target.value)}
                  label='Escreva a sua cidade'
                  size='md'
                />

                <Input
                  name='title'
                  type='text'
                  value={country}
                  onChange={event => setCountry(event.target.value)}
                  label='Escreva seu estado'
                  size='md'
                />

                <Input
                  name='title'
                  type='text'
                  value={whats}
                  onChange={event => setWhats(event.target.value)}
                  label='Escreva seu Whatsapp'
                  size='md'
                />
               
              </ModalBody>
    
              <ModalFooter>
                <Button colorScheme="red" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button colorScheme='purple' type='submit' id='description' name='description' onClick={handleCreateNewQuery}>Salvar</Button>
              </ModalFooter>
            </ModalContent>
          </Box>
        </Modal>
      </>
    )
  }