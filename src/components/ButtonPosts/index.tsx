import { Button, ButtonProps, Icon, Text } from '@chakra-ui/react';
import { ElementType } from 'react';

interface ButtonPostsProps extends ButtonProps {
    icon: ElementType;
    text?: string;
    iconColor: string;
    iconSize: string;
}

export function ButtonPosts({icon, text, iconColor, iconSize, ...rest}:ButtonPostsProps) {
    return(
        <Button
            size='sm'
            colorScheme='purple'
            align='center'
            justify='center'
            {...rest}
            _focus={{
                boxShadow:
                    "0 0 0px 0px rgba(88, 144, 255, .100), 0 1px 1px rgba(0, 0, 0, .100)",

            }}
        >
            
            <Icon as={icon} color={iconColor} fontSize={iconSize} mr='3' />
            
            <Text
                fontSize={['14','18']}
            >
                {text}
            </Text>
        </Button>
    );
}