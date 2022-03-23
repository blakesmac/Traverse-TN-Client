import React, {useContext, useEffect} from "react"
import { useHistory } from "react-router-dom";
import { RiverContext } from "./RiverProvider"
import "./river.css"
export const RiverList = () => {
    const { rivers, getRivers } = useContext(RiverContext);
    const history = useHistory()

    useEffect(() => {
        getRivers();
    }, []);

    return (
        <>

                <header className="rivers_header">
                    <h1>Rivers</h1>
                </header>
            <article className="rivers">
                
                {rivers.map((river) => {
                    return (
                        <section className="river_info" key={river.id}>
                            <div className="river_title">{river.title}</div>
                            <div className="river_address">Located: {river.address}</div>
                            <div className="river_fish">Fish Species: {river.fish}</div>
                            <div className="river_animals">Wildlife: {river.animals}</div>
                            <div className="river_about">About: {river.about}</div>
                            <div className="river_flowchart" >
                            
                                Flowchart: <img className="river_img" src={river.flowchart}/>                            
                            </div>
                            <div className="river_visitors">Members who have visited: {river.visitors.map((visitor)=>
                            visitor?.user.username)} </div>
                        </section>
                    )
                })}
            </article>
        </>
    )



}