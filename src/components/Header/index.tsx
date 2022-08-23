import {Flex, Box} from '@chakra-ui/react'
import { NavSection } from '../Header/NavSection'
import { SignInButton } from '../SignInButton'
import { Logo } from './Logo';

export function Header() {
    return(
        <Box
            h='80px'
            w={['auto','100%']}
            borderBottom='1px'
            borderColor='gray.500'
        >   
            <Flex
                display='flex'
                justify='space-between'
                align='center'
                p={['6','8']}
                h='20'
            >
                <Logo href='/' />
                <NavSection />
                <SignInButton />
            </Flex>
        </Box>
    );
}