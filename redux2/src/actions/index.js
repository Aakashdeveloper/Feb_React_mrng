import {Articles_URL, Gallery_URL} from '../constants/ApiUrl';

export function latestNews(){
    const output = fetch(`${Articles_URL}?_end=3`,{method:'GET'})
            .then((response) => response.json())

        return{
            type:"GET_LATEST",
            payload: output
        }
}

export function articleNews(){
    const output = fetch(`${Articles_URL}?_start=3&_end=10`,{method:'GET'})
            .then((response) => response.json())

        return{
            type:"GET_ARTICLE",
            payload: output
        }
}

export function GalleryNews(){
    const output = fetch(`${Gallery_URL}`,{method:'GET'})
            .then((response) => response.json())

        return{
            type:"GET_GALLERY",
            payload: output
        }
}