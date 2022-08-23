import { Select, Stack, IconButton  } from '@chakra-ui/react';
import { useState } from 'react';
import { FiSearch } from "react-icons/fi";


export function Selections() {
    const [selectValue, setSelectValue] = useState('');
    const listSubject = [
        {id: 1, subject: 'Portugues'},
        {id: 2, subject: 'Matematica'},
        {id: 3, subject: 'Ciencia'},
        {id: 4, subject: 'Geografia'},
        {id: 5, subject: 'Historia'},
    ]

    const listFormat = [
        {id: 6, format: 'Presenial'},
        {id: 7, format: 'Remoto'},
    ]

    return(
        <Stack 
            direction='row'
            spacing={['2','4']}
            mb='1'
        >
            <Select
                variant='flushed'
                size='md'
                color='purple.500'
                w={['30','30','sm']}
                borderColor='purple.500'
                id='subject'
                onChange={e => setSelectValue(e.target.value)}
            >
                {listSubject.map((item) =>(
                    <option value={item.id}>{item.subject}</option>
                ))}
            </Select>

            <Select
                variant='flushed'
                size='md'
                color='purple.500'
                w={['30','30','sm']}
                borderColor='purple.500'
                onChange={e => setSelectValue(e.target.value)}
            >
                {listFormat.map((item) =>(
                    <option value={item.id}>{item.format}</option>
                ))}
            </Select>
            <IconButton 
                icon={<FiSearch />} 
                aria-label='Search database' 
                color='whiteAlpha' 
                fontSize='22' 
                onClick={() => {}} 
                cursor='pointer'
                variant='unstyled'
                ml='3'
            />
        </Stack>
    )
}