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
    Icon,
    Textarea,
    Text,
    Box,
    Stack,
  } from "@chakra-ui/react"
import { useSession } from "next-auth/client"
import { FormEvent,useState } from "react"
import { FiPlus } from "react-icons/fi"


import { Input } from "../../components/Form/Input"
import { Select } from "../../components/Form/Select"


import api from "../../services/api"


 export function CreateQuery() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [session]= useSession();

    const [subject, setSubject] = useState(1)
    const [format, setFormat] = useState(1)
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const[status, setStatus] = useState(1);
    const email = session.user.email;
    
    async function handleCreateNewQuery(event: FormEvent) {
      event.preventDefault();

      if(title == '' || description == '')
        return alert("Campos sem preencher!!!");

      await api.post('/duvidas',{
        title , 
        description, 
        subject:Number(subject), 
        format: Number(format), 
        status: Number(status),
        email})

      onClose();
  
      return alert("Dúvida adicionada com sucesso!");
    }

    const listSubjects = [
      {id: 1, name: 'Português'},
      {id: 2, name: 'Matemática'},
      {id: 3, name: 'Ciência'},
      {id: 4, name: 'Geografia'},
      {id: 5, name: 'História'},
    ];

    const listFormat = [
      {id: 1, name: 'Remoto'},
      {id: 2, name: 'Presencial'},
    ];

    return (
      <>
        <Button 
          onClick={onOpen} 
          colorScheme='purple' 
          fontSize='20'
          m='6'
        >
          <Icon 
            as={FiPlus}
            fontSize='30'
            mr='1'
          />
          Adicione uma dúvida
        </Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <Box>
            <ModalOverlay />
            
            <ModalContent onSubmit={handleCreateNewQuery}>
              
              <ModalHeader
                fontSize='xl'
                color='gray.900'
              >
                Adicione
              </ModalHeader>
              
              <ModalCloseButton color='black' />
              
              <ModalBody
                color='gray.900'
              >
                <Stack spacing={['2','4']} direction='row'>
                  <Select
                    name='materia'
                    value={subject}
                    onChange={event => setSubject(Number(event.target.value))}
                    label='Matéria'
                    variant='flushed'
                    w={['30', '30', '40']}
                  >
                    {listSubjects.map((item, index) => (
                      <option value={item.id}>{item.name}</option>
                    ))}
                  </Select>

                  <Select
                    name='format'
                    value={format}
                    onChange={event => setFormat(Number(event.target.value))}
                    label='Formato'
                    variant='flushed'
                    w={['30', '30', '40']}
                  >
                    {listFormat.map((item, index) => (
                      <option value={item.id}>{item.name}</option>
                    ))}
                  </Select>
                </Stack>
                
                
                <Input
                  name='title'
                  type='text'
                  value={title}
                  onChange={event => setTitle(event.target.value)}
                  label='Título da dúvida'
                  size='md'
                />

                <Text
                  mt='1'
                  fontSize='18'
                  fontWeight='medium'
                > 
                  Duvida 
                </Text>
                <Textarea
                  placeholder='Descreva sua dúvida'
                  value={description}
                  onChange={event => setDescription(event.target.value)}
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