import {Text, Link as ChakraLink, LinkProps as ChakraLinkProps} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { ActiveLink } from '../ActiveLink';

interface NavigationLinksProps extends ChakraLinkProps {
    children: ReactNode;
}

export function NavigationLinks({children, href, ...rest}: NavigationLinksProps) {
    return(
        <ActiveLink href={href} passHref>
            <ChakraLink>
                <Text fontSize={['12', '16']}>{children}</Text>
            </ChakraLink>
        </ActiveLink>
    );
}