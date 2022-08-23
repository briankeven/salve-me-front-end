import { useRouter } from 'next/router';
import { Button } from "@chakra-ui/react"

interface LogoProps {
    href: string;
}

export function Logo({href}: LogoProps) {
    const router = useRouter();

    return(
        <Button
            onClick={() => router.push('/')}
            colorScheme='purple.900'
            variant='ghost'
            border='none'
            fontWeight='bold'
            fontSize={['xl','2xl','3xl']}
            color='purple.500'
            mr='2'

            _focus={{
                boxShadow:
                  "0 0 0 0 rgba(50, 38, 89), 0 0px 0px rgba(50, 38, 89)"
            }}
        >
            Save.Me
        </Button>
    )
}