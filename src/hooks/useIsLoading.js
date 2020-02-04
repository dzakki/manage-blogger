import  { useState, useEffect } from 'react';


export default function IsLoading({data}) {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setTimeout(function(){  
            setIsLoading(false)
        }, 500);
        return () => {
            setIsLoading(true)
        } 
    }, [data])
    return isLoading
}



