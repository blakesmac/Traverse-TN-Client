import React, {useContext, useEffect, useState } from "react"
import { useParams } from "react-router";
import { TripContext } from "./TripProvider"
import { useHistory } from "react-router"
import { RiverContext } from "../river/RiverProvider";
import { PlaceContext } from "../place/PlaceProvider";
import { ProfileContext } from "../member/ProfileProvider";
import "./trip.css"

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

            <section class="trip_header">
            <h1>Current Trips</h1>
                
            </section>
            <div className="create_container">
                <button className="create_trip"
                    onClick={() => history.push("/trips/new")}>
                    Plan Trip
                </button>
                </div>
            <article className="trip_list">
                
                {trips.map((trip) => {
                    return (
                        <section className="trip_info" key={`trip--${trip.id}`}>
                            <section className="trip_section">
                                <h3 className="trip_title"> {trip.title}</h3>
                                <div className="trip_river"> River: {trip.river.title}</div>
                                <div className="trip_place"> Place: {trip.place.address}</div>
                                <div className="trip_date"> Date: {trip.date}</div>
                                {/* <div className="trip_member"> memberId: {trip.member?.user}</div> */}
                            </section>
                            <div>
                                <div id={trip.id} className="trip_deletebutton" onClick={(e) => handleDelete(e)}>
                                    Delete
                                </div>
                            </div>
                            <div>
                                <button className="trip_editbtn"
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
