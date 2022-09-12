import centers from '../assets/stateCenter.json'

const useCenterFilter = (statename) => {
    let found = centers.find((element) => element.state === statename.stateName)
    return {lat: Number(found.latitude), lng: Number(found.longitude)}
}

export default useCenterFilter