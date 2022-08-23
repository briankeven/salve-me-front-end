import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        gray: {
            '900': '#181B23',
            '800': '#1F2029',
            '700': '#353646',
            '600': '#4B4D63',
            '500': '#616480',
            '400': '#797D9A',
            '300': '#9699B0',
            '200': '#B3B5C6',
            '100': '#D1D2DC',
            '050': '#EEEEF2',
        },
        purple: {
            '900': '#322659',
            '800': '#44337A',
            '700': '#553C9A',
            '600': '#6B46C1',
            '500': '#805AD5',
            '400': '#9F7AEA',
            '300': '#B794F4',
            '200': '#D6BCFA',
            '100': '#E9D8FD',
            '050': '#FAF5FF',
        },
    },
    fonts : {
        heading: 'Roboto',
        body: 'Roboto',
    },
    styles: {
        global: {
            body: {
                bg: 'gray.900',
                color: 'gray.50',
                overflowX: 'hidden'
            }
        }
    }
})