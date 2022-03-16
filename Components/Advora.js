import React, { useState, useEffect } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Button, Stack } from '@chakra-ui/react'
import RideCard from './RideCard';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    Portal,
} from '@chakra-ui/react'
import FilterContent from './FilterContent';
import { Icon } from '@chakra-ui/react'
import { MdOutlineSort } from 'react-icons/md';
import { getRides } from '../pages/api/edvora_api';
import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const Advora = ({ station_code }) => {
    const [rideData, setRideData] = useState([]);
    const [state,setState]=useState('');
    const [city,setCity]=useState('')

    const breakpoints = createBreakpoints({
        sm: '320px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
        '2xl': '1536px',
      }) 
    const theme = extendTheme({ breakpoints })

    const getData = async () => {
        const data = await getRides();
        setRideData(data);
    }
    useEffect(() => {
        getData();
    }, [])

    const getStateCity=(data)=>{
        setState(data);
    }

    const getCity = (data)=>{
        setCity(data);
    }

    let Upcoming = [];
    let Past = [];
    let Nearest = [];
    let stationPath = [];
    
    rideData.map((date) => {
        stationPath = date?.station_path;
        for(let i=0;i<stationPath.length;i++){
            if(stationPath[i]>station_code-5 && stationPath[i]<station_code+5 || stationPath[i]===station_code){
                Nearest.push(date);
            }else if(date.state===state || date.city===city){
                Nearest.push(date);
            }
        }
       
        if (new Date() < new Date(date?.date)) {
            Past.push(date);
        } else {
            Upcoming.push(date);
        }
    })

    useEffect(()=>{
        const filter = rideData.filter((data)=>{
            return data?.city === city 

        })

        setRideData(filter);
    },[city])

    
    return (
        <>
            <Box as={'main'} mt={'20'} display='flex-1' width='full' bg="#E5E5E5">
                <Tabs >
                    <Stack flexDirection='row' justifyContent='space-between' padding='1rem 2rem 0rem 2rem'>
                        <TabList mb="2" >
                            <Tab fontSize='xl'>Nearest rides</Tab>
                            <Tab fontSize='xl'>Upcoming rides({Upcoming.length})</Tab>
                            <Tab fontSize='xl'>Past rides ({Past.length})</Tab>
                        </TabList>
                        <Popover >
                            <PopoverTrigger>
                                <Button bgColor='#E5E5E5'   margin='1rem' fontSize='large'> <Icon as={MdOutlineSort} margin='1' />Filter</Button>
                            </PopoverTrigger>
                            <Portal>
                                <PopoverContent bgColor='#131313' borderRadius={'2xl'} boxSize={{md:'5xs', lg:'2xs'}}>
                                    <FilterContent rideData={rideData} onChangeState={getStateCity} onChangeCity={getCity} />
                                </PopoverContent>
                            </Portal>
                        </Popover>
                    </Stack>
                    <TabPanels>
                        <TabPanel>
                            {
                                 Nearest.map((data) => {
                                    return (
                                        <Box key={data.id} margin={'3'} >
                                            <RideCard data={data} />
                                        </Box>
                                    )
                                })
                            }

                        </TabPanel>
                        <TabPanel>
                            {
                                Upcoming.map((data) => {
                                    return (
                                        <Box key={data.id} margin={'3'}>
                                            <RideCard data={data} />
                                        </Box>
                                    )
                                })
                            }
                        </TabPanel>
                        <TabPanel>
                            {
                                Past.map((data) => {
                                    return (
                                        <Box key={data.id} margin={'3'}>
                                            <RideCard data={data} />
                                        </Box>
                                    )
                                })
                            }
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </>
    )
}

export default Advora;
