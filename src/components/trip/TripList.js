import React, {useContext, useEffect, useState } from "react"
import { useParams } from "react-router";
import { TripContext } from "./TripProvider"
import { useHistory } from "react-router"
import { RiverContext } from "../river/RiverProvider";
import { PlaceContext } from "../place/PlaceProvider";
import { ProfileContext } from "../member/ProfileProvider";


export const TripList = () => {
    const { trips, getTrips, deleteTrip } = useContext(TripContext);
    const [trip, setTrip] = useState([])
    const { rivers, getRivers } = useContext(RiverContext);
    const { places, getPlaces } = useContext(PlaceContext);
    const {profile, getProfile} = useContext(ProfileContext);
    const history = useHistory()
    const {tripId} =useParams()

    useEffect(()=> {
        getProfile();
    }, [])

    useEffect(() => {
        getTrips();
        getRivers();
        getPlaces();
    }, []);

    const handleDelete = (e) => {
        deleteTrip(e.target.id)
        .then(() => {
            history.push(`/trip`)
        })
    }
    // useEffect(() => {
    //     getRivers();
    // }, []);

    // useEffect(() => {
    //     getPlaces();
    // }, []);



    return (
        <>


            <article>
                <h1>Current Trips</h1>
                <div>
                <button
                    onClick={() => history.push("/trips/new")}>
                    Create New Trip
                </button>
                </div> <br />
                {trips.map((trip) => {
                    return (
                        <section key={`trip--${trip.id}`}>
                            <section className="trip_section">
                                <div> {trip.title}</div>
                                <div> River: {trip.river.title}</div>
                                <div> Place: {trip.place.about}</div>
                                <div> Date: {trip.date}</div>
                                <div> memberId: {trip.member?.user}</div>
                            </section>
                            <div>
                                <div id={trip.id} className="button" onClick={(e) => handleDelete(e)}>
                                    Delete
                                </div>
                            </div>
                            <div>
                                <button
                                    onClick={() => history.push(`/trip/edit/${trip.id}`)}
                                >
                                    Edit
                                </button>
                            </div>
                        </section>
                    )
                })}
            </article>
            <div>
            </div>
        </>
    );
    


}
