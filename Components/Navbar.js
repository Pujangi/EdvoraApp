import React from 'react'
import { Image } from '@chakra-ui/react';
import { ReactNode } from 'react';
import {
    Box,
    Flex,
    Avatar,
    Link,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
} from '@chakra-ui/react';

const Navbar = ({ user }) => {

    return (

        <Box as={'header'} bg={'black'} position='fixed' width={'100%'} top={'0'}>
            <Flex  h={'20'} alignItems={'center'} justifyContent={'space-between'} padding={'10'}>
                <Box textColor={'white'} fontSize={'2xl'} fontWeight={'bold'} >Edvora</Box>

                <Flex alignItems={'center'}>
                    <Stack direction={'row'} spacing={7}>
                        <Box textColor={'white'} fontSize={'xl'} fontWeight={'medium'} paddingTop={'7px'}>{user?.name}</Box>

                        <Menu>
                            <MenuButton
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                <Avatar
                                    size={'md'}
                                    src={user?.url}
                                />
                            </MenuButton>
                            <MenuList alignItems={'center'}>
                                <br />
                                <Center>
                                    <Avatar
                                        size={'2xl'}
                                        src={user?.url}
                                    />
                                </Center>
                            </MenuList>
                        </Menu>
                    </Stack>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Navbar
