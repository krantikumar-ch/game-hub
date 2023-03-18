import axios from 'axios';
export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'f56e4f2315634849b891c634c1b20944'
    }
})