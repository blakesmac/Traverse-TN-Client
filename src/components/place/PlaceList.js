import React, {useContext, useEffect} from "react"
import { useHistory } from "react-router-dom";
import { PlaceContext } from "./PlaceProvider";
import "./place.css"
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
                        <div className="place_address" >{place.address}</div>
                        <div className="place_wildlife" >Wildlife: {place.wildlife}</div>
                        <div className="place_about" >About: {place.about}</div>
                        <div className ="place_visitors" >Members who have visited: {place.visitors.map((visitor)=>
                        visitor?.user.username)}</div>
                    </section>
                )
            })}
        </article>
    )



}