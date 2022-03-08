import {
    Box,
    CloseButton,
    Container,
    Icon,
    Square,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
} from '@chakra-ui/react';
import * as React from 'react';
import {BiCodeAlt} from 'react-icons/bi';

  
const Header = () => {
    const isMobile = useBreakpointValue({ base: true, md: false })
    return (
        <Box as="section" pb={{ base: '12', md: '24' }} >
            <Box bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')} borderStyle='solid' borderBottomWidth={1} borderColor='gray.100'>
                <Container maxW='container.xl' py={{ base: '1', md: '2.5' }} position="relative">
                    <Stack
                        direction={{ base: 'column', sm: 'row' }}
                        justify="space-between"
                        spacing={{ base: '3', md: '2' }}
                    >
                        <Stack
                            spacing="4"
                            direction={{ base: 'column', md: 'row' }}
                            align={{ base: 'start', md: 'center' }}
                        >
                            {!isMobile && (
                                <Square size="12" bg="bg-subtle" borderRadius="md">
                                    <Icon as={BiCodeAlt} cursor='pointer' color='green.400' boxSize="6" />
                                </Square>
                            )}
                            <Stack
                                direction={{ base: 'column', md: 'row' }}
                                spacing={{ base: '0.5', md: '1.5' }}
                                pe={{ base: '4', sm: '0' }}
                            >
                                <Text fontWeight="medium">Design your ui with UiBuiler</Text>
                                <Text color="gray.500">Get Your Code</Text>
                            </Stack>
                        </Stack>
                    </Stack>
                </Container>
            </Box>
        </Box>
    )
}

export default Header