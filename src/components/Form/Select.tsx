import {FormControl, FormErrorMessage, FormLabel, Select as ChakraSelect, SelectProps as ChakraSelectProps} from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

interface SelectProps extends ChakraSelectProps {
    name: string;
    label?: string;
    error?: FieldError;
}

const SelectBase: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = ({name, label, error = null, ...rest}, ref) => {
    return(
        <FormControl isInvalid={!!error}>
            { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }
            <ChakraSelect 
                name={name}
                id={name}
                bgColor='gray.200'
                variant='flushed'
                size='xs'
                _hover={{
                    bgColor:'gray.300'
                }}
                ref={ref}
                {...rest}
            />
            {!!error && (
                <FormErrorMessage>
                    {error.message}
                </FormErrorMessage>
            )}
        </FormControl>
    );
}

export const Select = forwardRef(SelectBase);