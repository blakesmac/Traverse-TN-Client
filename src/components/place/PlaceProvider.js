import React, {useState} from "react"

export const PlaceContext = React.createContext(); 

export const PlaceProvider = (props) => {
    const [places, setPlaces] = useState([]);

    const getPlaces = () => {
        return fetch("http://localhost:8000/places", {
            headers: {
                Authorization: `Token ${localStorage.getItem("tt_token")}`,
            },
        })
        .then((response) => response.json())
        .then(setPlaces);
    };

    const getPlaceById = (placeId) => {
        return fetch(`http://localhost:8000/places?id=${placeId}`)
        .then(res => res.json())
    }

    

    return (
        <PlaceContext.Provider value={{ places, getPlaces, getPlaceById}}>
            {props.children}
        </PlaceContext.Provider>
    )



}