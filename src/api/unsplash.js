import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 
        'Client-ID d83c3949cf890dff1b283f5b1ebb28c3234e49c820c94dfaa629c53928954de1',
    }
});