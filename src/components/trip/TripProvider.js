import React, {useState, createContext} from "react"

export const TripContext = createContext()

export const TripProvider = (props) => {
    const [trips, setTrips] = useState([]);

    const getTrips = () => {
        return fetch("http://localhost:8000/trips", {
            headers: {
                Authorization: `Token ${localStorage.getItem("tt_token")}`,
            },            
        })
            .then((response) => response.json())
            .then(setTrips);
    };

    const createTrip = (newTrip) => {
        return fetch(`http://localhost:8000/trips`, {
            method: "POST",
            headers: {
                Authorization: `Token ${localStorage.getItem("tt_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTrip)
        })
            .then((response) => response.json())
            .then(getTrips)
    };

    const editTrip = (trip) => {
        return fetch(`http://localhost:8000/trips/${trip.id}`, {
            method: "PUT",
            headers: {
                Authorization: `Token ${localStorage.getItem("tt_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(trip)
        })
            .then(getTrips)
    };

    const deleteTrip = (id) => {
        return fetch(`http://localhost:8000/trips/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Token ${localStorage.getItem("tt_token")}`,
            },
        })
            .then(getTrips)
        
    };

    return (
        <TripContext.Provider value={{ trips, getTrips, createTrip, editTrip, deleteTrip }}>
            {props.children}
        </TripContext.Provider>
    );



}