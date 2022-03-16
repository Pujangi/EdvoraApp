import { Image, Text, Button, Box, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const RideCard = ({ data }) => {
    const breakpoints = createBreakpoints({
        sm: '320px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
        '2xl': '1536px',
    })
    const theme = extendTheme({ breakpoints })

    return (
        <>
            <Box display={{ md: 'flex' }} padding={'3'} borderRadius={'2xl'}>
                <Box flex bgColor='#171717' width='100%' borderRadius='xl' padding='5'>
                    <SimpleGrid columns={[1, null, 3]} spacingX='40px' spacingY='20px'>
                        <Box display={'flex'} justifyContent={'center'} padding={'3'} flexShrink={0}>
                            <Image
                                minWidth={'-webkit-fill-available'}
                                height={'200'}
                                objectFit='cover'
                                src={data?.map_url}
                                alt='Image'
                                borderRadius={'lg'}
                            />
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} justifyContent={'space-around'}>
                            <Text fontSize='18px' color="#CFCFCF" fontWeight='500' lineHeight='21.78px'>
                                Ride Id : {data?.id}
                            </Text>
                            <Text fontSize='18px' color="#CFCFCF" fontWeight='500' lineHeight='21.78px'>
                                Origin Station : {data?.origin_station_code}
                            </Text>
                            <Text fontSize='18px' color="#CFCFCF" fontWeight='500'>
                                station_path : [{(data?.station_path).toString().split(" , ")}]
                            </Text>
                            <Text fontSize='18px' color="#CFCFCF" fontWeight='500' lineHeight='21.78px'>
                                Date : {data?.date}
                            </Text>
                            <Text fontSize='18px' color="#CFCFCF" fontWeight='500' lineHeight='21.78px'>
                                Distance :{data?.destination_station_code - data?.origin_station_code}
                            </Text>
                        </Box>
                        <Box display={'flex'} justifyContent={'space-around'} flexDirection={{ sm: 'column', md: 'column', lg: 'row' }}
                            paddingTop={'3'} margin={'3'}>
                            <Button colorScheme='teal' variant='solid' borderRadius='3xl' bgColor='#000000' >
                                {data?.city}
                            </Button>
                            <Button colorScheme='teal' variant='solid' borderRadius='3xl' bgColor='#000000'>
                                {data?.state}
                            </Button>
                        </Box>
                    </SimpleGrid>
                </Box>
            </Box>
        </>
    )
}

export default RideCard
