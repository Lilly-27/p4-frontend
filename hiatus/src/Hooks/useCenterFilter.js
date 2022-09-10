import centers from '../assets/stateCenter.json'

const useCenterFilter = (statename) => {
    let found = centers.find((element) => element.state === statename.stateName)
    console.log("found",found)
    return {lat: Number(found.latitude), lng: Number(found.longitude)}
    // return {lat: 40.0000000, lng: -89.0000000}
}

export default useCenterFilter