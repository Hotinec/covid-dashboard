import axios from 'axios';

export async function apiRequest(url){
    try {
       const result =  await axios.get(url).then((response) => response.data);
       return result;
    }
    catch (e) {
        return console.error(e.message);
    }
}