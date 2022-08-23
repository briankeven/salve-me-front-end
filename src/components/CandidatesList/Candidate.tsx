import React from 'react';
import { Text, Avatar, Button} from '@chakra-ui/react';

import api from '../../services/api';

export function Candidate({props, duvida}){


    async function handleClick(event) {
        event.preventDefault();

        await api.put('/user/candidato', {
            duvida_id:duvida,
            id: props.user_id
        });

        return alert("Dúvida fechada");
    }
    
    return(
        <>
            
            <Avatar 
                name={props.name}
                src={props.photo}
                size='sm'
                showBorder={true}
                borderColor='purple'
                />

                <Text>{props.name}</Text>

                <Button 
                    variant='unstyled'
                    _focus={{
                            boxShadow:
                                 "0 0 0px 0px rgba(88, 144, 255, .100), 0 1px 1px rgba(0, 0, 0, .100)",
                            }}
                    onClick={handleClick}
                    >
                    👍
                </Button>
                    
        </>
    )
}