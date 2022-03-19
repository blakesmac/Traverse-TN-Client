import React, {useContext, useEffect} from "react"
import { useHistory } from "react-router-dom";
import { PlaceContext } from "./PlaceProvider";

export const PlaceList = () => {
    const { places, getPlaces } = useContext(PlaceContext);
    const history = useHistory()

    useEffect(() => {
        getPlaces();
    }, []);

    return (
        <article className="places">
            <header className="places_header">
                <h1>Places</h1>
            </header>
            {places.map((place) => {
                return (
                    <section className="place">
                        <div className="place_title"></div>
                        <div>Name: {place.address}</div>
                        <div>Wildlife: {place.wildlife}</div>
                        <div>About: {place.about}</div>
                        <div>Members who have visited: {place.visitors.map((visitor)=>
                        visitor?.user.username)}</div>
                    </section>
                )
            })}
        </article>
    )



}