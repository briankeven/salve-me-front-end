import {Flex} from '@chakra-ui/react'
import { useSession } from 'next-auth/client';
import { useEffect,useState } from 'react';

import {Header} from '../../components/Header'
import { BoxContent } from '../../components/BoxContent';
import Perfil from '../../components/Perfil';

import api from '../../services/api';


export default function UserPerfil() {
    const [session] = useSession();
    const [user, setUser]= useState([]);

    useEffect(()=>{
        if(!session)
            return;
    
        api.get(`/user/${session.user.email}`).then( response => {
            setUser(response.data);
        })
    })

    return session ? (
        <>
            <Perfil props= {user}/> 
        </>
    ) : (
        <>
            <Header />
            <Flex
                maxW={1380}
                m='0 auto'
                h='100vh-80px'
                align='center'
                direction='column'
            >
                <BoxContent 
                    title='Faça o login' 
                    boxHeight='xl'>
                </BoxContent>
            </Flex>
        </>
    )
   
}