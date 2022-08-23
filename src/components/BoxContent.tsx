import { Box, Text, Button, Flex, HStack, useBreakpointValue } from '@chakra-ui/react'
import { ReactNode } from 'react'


interface BoxContentProps {
    children: ReactNode;
    boxHeight: string;
    title: string
}

export function BoxContent({children, boxHeight, title}: BoxContentProps) {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    
    return(
        <Box
            h={boxHeight}
            mt='8'
            w='70vw'
            bg='purple.900'
            borderTopLeftRadius='32'
            borderBottomRadius='32'
            align='center'
        >
            { isWideVersion &&
                <Text 
                    fontWeight='medium' 
                    fontSize='32' 
                    mt='2px' 
                    color='whiteAlpha.800'
                >
                    {title}
                </Text>
            }

            {children}
        </Box>
    );
}
