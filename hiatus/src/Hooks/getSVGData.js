const axios = require('axios')

const getSVGData = async () => {
    const connString = process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_PROD_SVG
    : REACT_APP_DEV_SVG

    try {
        const res = await axios.get(connString)
        return res;
    } catch(err) {
        console.error(err)
    }
}   

export default getSVGData;