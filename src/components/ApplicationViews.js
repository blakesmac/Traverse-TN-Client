import React from "react"
import { Route } from "react-router-dom"
import { TripProvider } from "./trip/TripProvider"
import { TripForm } from "./trip/TripForm"
import { TripList } from "./trip/TripList"
import { RiverProvider } from "./river/RiverProvider"
import { RiverList } from "./river/RiverList"
import { PlaceProvider } from "./place/PlaceProvider"
import { PlaceList } from "./place/PlaceList"


export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgoldenrodyellow"
        }}>
            <TripProvider>
                <RiverProvider>
                    <PlaceProvider>
                    <Route path="/trips/new">
                        <TripForm />
                    </Route>
                    <Route path="/trip">
                        <TripList />
                    </Route>
                    <Route path="/river">
                        <RiverList />
                    </Route>
                    <Route path="/place">
                        <PlaceList />
                    </Route>


                    </PlaceProvider>
                </RiverProvider>
            </TripProvider>
        </main>
    </>
}
