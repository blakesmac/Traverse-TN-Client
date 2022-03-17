import React, {useContext, useEffect, useState } from "react"
import { TripContext } from "./TripProvider"
import { useHistory } from "react-router"
import { RiverContext } from "../river/RiverProvider"
import { PlaceContext } from "../place/PlaceProvider"



export const TripForm = () => {
    const history = useHistory()
    const { trips, getTrips, createTrip, editTrip, deleteTrip} = useContext(TripContext);
    const currentUser = parseInt(sessionStorage.getItem("tt_token"))
    const {rivers, getRivers} = useContext(RiverContext)
    const { places, getPlaces} = useContext(PlaceContext)


    const [currentTrip, setCurrentTrip] = useState({
        title: "",
        river: 0,
        place:0,
        date: "",
        memberId: 0
    });


    const editInputChange = (event) => {
        const newTrip = {...currentTrip}
        newTrip[event.target.value] = event.target.value
        setCurrentTrip(newTrip)
    }

    useEffect(() => {
        getRivers()
    }, [])

    useEffect(() => {
        getPlaces()
    }, [])


    const saveTrip = () => {
        setIsLoading(true);
        if (tripId) {
            updateTrip({
                id: parseInt(tripId),
                title: currentTrip.title,
                river: currentTrip.river,
                place: currentTrip.place,
                date: currentTrip.date,
                memberId: currentUser
                
            })
                .then(() => history.push(`/trip`))
        } else {
            addTrip({
                title: currentTrip.title,
                river: currentTrip.river,
                place: currentTrip.place,
                date: currentTrip.date,
                memberId: currentUser
            })

                .then(() => history.push(`/trip`))
        }
    }

    return (
        <>
            <form>
                <h2>Create New Trip</h2>
                <fieldset>
                    <div>
                        <label htmlFor="title">Title</label> <br />
                        <input
                            type="text"
                            name="title"
                            required
                            autoFocus
                            value={currentTrip.title}
                            onChange={editInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div>
                        <select htmlFor="river" onChange={editInputChange}
                            value={parseInt(currentTrip.river)} defaultValue={parseInt(currentTrip.river)}>
                            <option>Select River</option>
                            {rivers.map(river => (
                                <option
                                    key={river.id}
                                    value={river.id}
                                >
                                    {river.title}
                                </option>
                            ))}
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <div>
                        <select htmlFor="place" onChange={editInputChange}
                            value={parseInt(currentTrip.place)} defaultValue={parseInt(currentTrip.river)}>
                            <option>Select Place</option>
                            {places.map(place => (
                                <option
                                    key={place.id}
                                    value={place.id}
                                >
                                    {place.about}
                                </option>
                            ))}
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <div>
                        <label htmlFor="date">Date of Trip:</label>
                        {currentTrip.date}
                    </div>
                </fieldset>
            </form>
        </>
    );


}