import React, { useState } from 'react'
import {
    PopoverHeader,
    PopoverBody,
    Stack,
    Box,
} from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'

const FilterContent = ({ rideData, onChangeState, onChangeCity }) => {
    const [state, setState] = useState('');
    // const [city, setCity] = useState('');

    const changeState = (data) => {
        setState(data.target.value);
        onChangeState(data.target.value);
 console.log(data.target.value);
    }

    const changeCity = (data) => {
        // setCity(data.target.value);
         onChangeCity(data.target.value);
console.log(data.target.value);
    }

    // console.log(state);
    return (
        <Box display={'flex'} margin={'6'} flexDirection={'column'}>
            <PopoverHeader color='#A5A5A5' fontSize={'xl'} >Filter</PopoverHeader>
            <PopoverBody>
                <Stack spacing={6} marginTop={'5'}>
                    <Select placeholder='State' onChange={changeState}>
                        {rideData.map((data) => {
                            return (                              
                                <option key={data.state} value={data.state} >{data.state}</option>                                
                            )
                        })}
                    </Select>
                    <Select placeholder='City' onChange={changeCity}>
                        {rideData.map((data) => {

                            return (
                                data.state === state ? (
                                    <option key={data?.city} value={data.city}>{data.city}</option>
                                ) : null
                            )
                        })}
                    </Select>
                </Stack>
            </PopoverBody>
        </Box>
    )
}

export default FilterContent
