import React, {useContext, useEffect, useState } from "react"
import { TripContext } from "./TripProvider"
import { useHistory, useParams } from "react-router"
import { RiverContext } from "../river/RiverProvider"
import { PlaceContext } from "../place/PlaceProvider"
import "./trip.css"


export const TripForm = () => {
    const history = useHistory()
    const { trips, getTrips, createTrip, editTrip, deleteTrip} = useContext(TripContext);
    const currentUser = parseInt(sessionStorage.getItem("tt_token"))
    const {rivers, getRivers} = useContext(RiverContext)
    const { places, getPlaces} = useContext(PlaceContext)
    const { tripId} = useParams()
    const [isLoading, setIsLoading] = useState(true);

    const [currentTrip, setCurrentTrip] = useState({
        title: "",
        river: 0,
        place:0,
        date: "",
        memberId: 0
    });


    const editInputChange = (event) => {
        const newTrip = {...currentTrip}
        newTrip[event.target.id] = event.target.value
        setCurrentTrip(newTrip)
    }

    useEffect(() => {
        getRivers()
    }, [])

    useEffect(() => {
        getPlaces()
    }, [])


    const saveTrip = (e) => {
        e.preventDefault()
        setIsLoading(true);
        if (tripId) {
            editTrip({
                id: parseInt(tripId),
                title: currentTrip.title,
                river: currentTrip.river,
                place: currentTrip.place,
                date: currentTrip.date,
                memberId: currentUser
                
            })
                .then(() => history.push(`/trip`))
        } else {
            createTrip({
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
            <form className="trip_form">
                <h2>Create New Trip</h2>
                <fieldset>
                    <div>
                        <label htmlFor="title">Title</label> <br />
                        <input
                            type="text"
                            id="title"
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
                        <select htmlFor="river" onChange={editInputChange} id="river"
                            defaultValue={parseInt(currentTrip.river)}>
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
                        <select htmlFor="place" onChange={editInputChange} id="place"
                            defaultValue={parseInt(currentTrip.place)}>
                            <option>Select Place</option>
                            {places.map(place => (
                                <option
                                    key={place.id}
                                    value={place.id}
                                >
                                    {place.address}
                                </option>
                            ))}
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <div>
                        <label htmlFor="date">Date of Trip:</label>
                        <input type="date" id="date" name="date" required autoFocus className="form-control"
                        placeholder="Choose Date" onChange={editInputChange} default={currentTrip.date}/>
                        
                    </div>
                </fieldset>
                <button className='btn-tripform-save' onClick={saveTrip}>Save</button>
                <button className='btntripform--cancel' onClick={() => {history.push('/trip')}}>Cancel</button>
            

            </form>
        </>
    );


}
