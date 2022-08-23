import { Button, Avatar, Icon, Text, Stack, useBreakpointValue } from '@chakra-ui/react';
import { FaGithubAlt, FaGoogle } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { useRouter } from 'next/router';

import { useSession, signIn, signOut } from 'next-auth/client'

import { UpdatePerfil } from '../../pages/perfil/UpdatePerfil';

export function SignInButton() {
    const [session] = useSession();
    const router = useRouter()

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    const isWideVersionSignInButton = useBreakpointValue({
        base: 'unstyled',
        lg: 'solid',
    });

    async function mySignOut() {
        await router.push('/')
        await signOut()
    }

    async function mySignIn() {
        await router.push('/perfil')
        
        await signIn('google')
    }

    return session ? (
        <Button 
            colorScheme='purple' 
            borderRadius={['18', '24']} 
            p={['0','0','4',,'6']}
            ml='2'
            variant={isWideVersionSignInButton}
        >
            <Stack 
                spacing='2'
                direction='row'
                align='center'
            >
                <Avatar 
                    size='sm' 
                    name={session.user.name} 
                    src={session.user.image}
                />
                {isWideVersion && <Text fontSize='16' fontWeight='medium' color='whiteAlpha'> {session.user.name} </Text>}
                
                {isWideVersion && 
                    <Button
                        variant='unstyled'
                        type='button'
                        onClick={() => mySignOut()}
                    >
                        <Icon 
                            as={FiX} 
                            color='whiteAlpha' 
                            fontSize='16'
                        />
                    </Button>
                }
            </Stack>
        </Button>
    ) : (
        <Button 
            colorScheme='messenger' 
            borderRadius='22' 
            p='6'
            onClick={() => mySignIn()}
        >
            <Stack 
                spacing={'2'}
                direction='row'
                align='center'
            >
                <Icon as={FaGoogle} color='whiteAlpha' fontSize='20'/>
                {isWideVersion && <Text fontSize='16' fontWeight='medium' color='whiteAlpha'> Entre com o Google </Text>}
            </Stack>
        </Button>
    );
}