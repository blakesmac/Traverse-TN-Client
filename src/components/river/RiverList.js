import React, {useContext, useEffect} from "react"
import { useHistory } from "react-router-dom";
import { RiverContext } from "./RiverProvider"

export const RiverList = () => {
    const { rivers, getRivers } = useContext(RiverContext);
    const history = useHistory()

    useEffect(() => {
        getRivers();
    }, []);

    return (
        <article className="rivers">
            <header className="rivers_header">
                <h1>Rivers</h1>
            </header>
            {rivers.map((river) => {
                return (
                    <section className="river">
                        <div className="river_name"></div>
                        <div>Name: {river.title}</div>
                        <div>Address: {river.address}</div>
                        <div>Fish Species: {river.fish}</div>
                        <div>Wildlife: {river.animals}</div>
                        <div>About: {river.about}</div>
                        <div>Flowchart: {river.flowhchart}</div>
                        <div>Members who have visited: {river.visitors}</div>
                    </section>
                )
            })}
        </article>
    )



}