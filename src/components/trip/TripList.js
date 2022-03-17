import React, {useContext, useEffect } from "react"
import { TripContext } from "./TripProvider"
import { useHistory } from "react-router"
import { RiverContext } from "../river/RiverProvider";
import { PlaceContext } from "../place/PlaceProvider";


export const TripList = () => {
    const { trips, getTrips } = useContext(TripContext);
    const { rivers, getRivers } = useContext(RiverContext);
    const { places, getPlaces } = useContext(PlaceContext);
    const history = useHistory()


    useEffect(() => {
        getRivers();
    }, []);

    useEffect(() => {
        getPlaces();
    }, []);



    return (
        <>


            <article>
                <h1>Current Trips</h1>
                {trips.map((trip) => {
                    return (
                        <section key={`trip--${trip.id}`}>
                            <div>
                                <button
                                    onClick={() => history.push(`/trips/${trip.id}/edit`)}
                                >
                                    Edit
                                </button>
                            </div>
                            <div>

                                <p> Title: {trip.title}</p>
                                <p> River: {trip.river}</p>
                                <p> Place: {trip.place}</p>
                                <p> Date: {trip.date}</p>
                                <p> memberId: {trip.memberId}</p>
                            </div>
                        </section>
                    )
                })}
            </article>
            <div>
                <button
                    onClick={() => history.push("/trips/new")}>
                    Create New Trip
                </button>
            </div>
        </>
    );
    


}