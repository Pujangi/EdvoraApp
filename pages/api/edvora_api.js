import {rideLink} from './api_links';
import {userLink} from './api_links';
import axios from 'axios';

export const getRides = async() =>{
     return await axios.get(rideLink)
     .then((res)=>{
         return res.data;
     }).catch((err)=>{
         return err;
     })

    
}

export const getUser = async() =>{
    return await axios.get(userLink)
    .then((res)=>{
        return res.data;
    })
    .catch((err)=>{
        return err;
    })
}

