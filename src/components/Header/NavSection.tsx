import {HStack, Link as ChakraLink} from '@chakra-ui/react';
import { useSession } from 'next-auth/client';
import { NavigationLinks } from './NavigationLinks';

export function NavSection() {
    const [session] = useSession();

    return session ? (
        <HStack
            direction='row'
            spacing={['6','16']}
        >
            <NavigationLinks href='/search'>Search</NavigationLinks>
            <NavigationLinks href='/posts'>Posts</NavigationLinks>
            <NavigationLinks href='/perfil'>Perfil</NavigationLinks>
        </HStack>
    ) : (

        <HStack
            direction='row'
            spacing={['6','16']}
        >
            <NavigationLinks href='/search'>Search</NavigationLinks>
            <NavigationLinks href='/posts'>Posts</NavigationLinks>
        </HStack>
    )
}