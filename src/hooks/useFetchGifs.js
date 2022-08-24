import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {

    /* Creating a state variable called images and a function called setImages. */
    const [ images, setImages ]      = useState([]);

   /* Creating a state variable called isLoading and a function called setIsLoading. */
    const [ isLoading, setIsLoading] = useState(true)

    /**
     * GetImage is an asynchronous function that calls getGifs, which returns a promise, and then sets
     * the state of images to the value of the promise.
     */
    const getImage = async () => {
        const newImages = await getGifs( category )
        setImages(newImages);
        setIsLoading(false)
    }

    useEffect(() => {
        getImage();
    },[]);


    return (
        {
            images,
            isLoading
        }
    )
}
