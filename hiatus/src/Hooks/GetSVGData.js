import { useEffect, useState } from 'react';

const GetSVGData =  () => {
    //process.env is undefined not really sure why I even install dotenv
    // const connString = process.env.NODE_ENV === 'production'
    // ? process.env.REACT_APP_PROD_SVG
    // : process.env.REACT_APP_DEV_SVG

    // console.log(connString)
    const [res, setRes] = useState(null)

    useEffect(() => {
        fetch('http://localhost:4000/svg/getSVGs')
        .then((res) => res.json())
        .then((data) => {
            setRes(data)
        })
        .catch(console.error)
    },[])
    
    if(res !== null){
        return res
    }
    
}   

export default GetSVGData;