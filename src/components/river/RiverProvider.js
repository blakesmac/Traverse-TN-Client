import React, {useState} from "react"

export const RiverContext = React.createContext(); 

export const RiverProvider = (props) => {
    const [rivers, setRivers] = useState([]);

    const getRivers = () => {
        return fetch("http://localhost:8000/rivers", {
            headers: {
                Authorization: `Token ${localStorage.getItem("tt_token")}`,
            },
        })
        .then((response) => response.json())
        .then(setRivers);
    };

    const getRiverById = (riverId) => {
        return fetch(`http://localhost:8000/rivers?id=${riverId}`)
        .then(res => res.json())
    }

    

    return (
        <RiverContext.Provider value={{ rivers, getRivers, getRiverById}}>
            {props.children}
        </RiverContext.Provider>
    )



}