import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Button,
    Text,
    useDisclosure,
  } from "@chakra-ui/react"
import { ReactNode } from "react"

interface queryProps{
    like:Number,
    name: String,
    country: String,
    city: String
}

interface ProfilePopover {
    children: ReactNode
    props: queryProps
}

export function ProfilePopover({children, props}: ProfilePopover){

    const { onOpen } = useDisclosure()
        return (
      <>
        <Popover
            returnFocusOnClose={false}
            placement='top'
            closeDelay={0.9}
        >
            <PopoverTrigger>
                <Button
                    mt='3.5px'
                    variant='ghost'
                    colorScheme='whiteAlpha.900'
                    _focus={{
                        boxShadow: "0"
                    }}
                    onClick={onOpen}
                >
                    {children}
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader
                    fontWeight='bold'
                    color='purple.900'
                >
                    {props.name}
                </PopoverHeader>
                <PopoverBody
                    fontWeight='thin'
                    color='purple.800'
                >
                    <Text>Likes: <Text as='span' color='pink.500' fontWeight='medium'>{props.like}</Text></Text>

                    <Text>Estado: <Text as='span' color='pink.500' fontWeight='medium'>{props.country}</Text></Text>
                    
                    <Text>Cidade: <Text as='span' color='pink.500' fontWeight='medium'>{props.city}</Text></Text>

                </PopoverBody>
            </PopoverContent>
        </Popover>
      </>
    )
}

