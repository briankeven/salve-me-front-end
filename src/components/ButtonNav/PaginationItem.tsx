import { Button } from '@chakra-ui/react'

interface PaginationItemProps {
    number: number;
    isCurrent?: boolean;
}

export function PaginationItem({
    isCurrent = false,
    number
}: PaginationItemProps) {
    if(isCurrent) {
        return(
            <Button
                size='sm'
                fontSize='xs'
                width='4'
                colorScheme='purple.600'
                disabled
                _disabled={{
                    bgColor: 'gray.500',
                    cursor: 'default'
                }}
            >
                {number}
            </Button>
        );
    }
    return(
        <Button
            size='sm'
            fontSize='xs'
            width='4'
            bgColor='purple.500'
            _hover={{
                bgColor: 'purple.500'
            }}
        >
            {number}
        </Button>
    );
}