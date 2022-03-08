import {
    Box,
    Button,
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
            <Box bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
                <Container maxW='container.xl' py={{ base: '1', md: '2.5' }} position="relative">
                    <CloseButton display={{ sm: 'none' }} position="absolute" right="0" top="2" />
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
                                <Text color="muted">Get Your Code</Text>
                            </Stack>
                        </Stack>
                        <Stack
                            direction={{ base: 'column', sm: 'row' }}
                            spacing={{ base: '3', sm: '2' }}
                            align={{ base: 'stretch', sm: 'center' }}
                        >
                            <Button variant="primary" isFullWidth>
                                Read more
                            </Button>
                            <CloseButton display={{ base: 'none', sm: 'inline-flex' }} />
                        </Stack>
                    </Stack>
                </Container>
            </Box>
        </Box>
    )
}

export default Header