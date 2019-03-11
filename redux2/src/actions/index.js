import {Articles_URL, Gallery_URL} from '../constants/ApiUrl';

export function latestNews(){
    const output = fetch(`${Articles_URL}?_end=3`,{method:'GET'})
            .then((response) => response.json())

        return{
            type:"GET_LATEST",
            payload: output
        }
}