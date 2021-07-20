import { useState, useEffect } from "react";

const useFetch = (url, options) =>{
    const [result, setResult] = useState(null);
    const [loading, setLoading] =  useState(true);
    const [error, setError] = useState(null);

useEffect(() =>{
    const getData = async() =>{
        try{
            const res = await fetch(url, options);
            const json= await res.json();
            setResult(json);
            setLoading(false)
        } catch (err){
            setError(err);
            setLoading(false)
        }
    }
    getData();
}, [url, options])

return {result, loading, error};
}

export default useFetch;