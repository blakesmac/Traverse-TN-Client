import React, {useState, createContext} from "react"

export const ProfileContext = createContext()

export const ProfileProvider = (props) => {
    const [profile, setProfile ] = useState([])
    const [trips, setTrips] = useState([])


    const getProfile = () => {
        return fetch("http://localhost:8000/members", {
            headers: {
                Authorization: `Token ${localStorage.getItem("tt_token")}`,
            },
        })
        .then((response) => response.json())
        .then(setProfile);
    };

    const getTripsByMember = (id) => {
        return fetch(`http://localhost:8000/members/${id}/trips`, {
            headers: {
                Authorization: `Token ${localStorage.getItem("tt_token")}`,
            },
        })
        .then((response) => response.json())
        .then(setTrips)
    };

    return (
        <ProfileContext.Provider value={{
            getProfile, getTripsByMember, profile, trips
        }}>
            {props.children}
        </ProfileContext.Provider>
    )
}