import axios from "axios";

export default axios.create ({ 
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'cbd89204cd984e929205abf57e8247a9'
    }

})