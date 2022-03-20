import React from "react"
import { Route } from "react-router-dom"
// Trips
import { TripProvider } from "./trip/TripProvider"
import { TripForm } from "./trip/TripForm"
import { TripList } from "./trip/TripList"
// Rivers
import { RiverProvider } from "./river/RiverProvider"
import { RiverList } from "./river/RiverList"
// Places
import { PlaceProvider } from "./place/PlaceProvider"
import { PlaceList } from "./place/PlaceList"
// Profile
import { ProfileProvider } from "./member/ProfileProvider"
import { ProfileList } from "./member/ProfileList"
// Favorites Stretch
import { FavoriteProvider } from "./favorite/FavoriteProvider"
import { FavoritesList } from "./favorite/FavoriteList"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgoldenrodyellow"
        }}>
            <FavoriteProvider>
                <ProfileProvider>
                    <TripProvider>
                        <RiverProvider>
                            <PlaceProvider>
                                <Route exact path="/trips/new">
                                    <TripForm />
                                </Route>
                                <Route exact path="/trip">
                                    <TripList />
                                </Route>
                                <Route exact path="/trip/edit/:tripId(\d+)">
                                    <TripForm />
                                </Route>
                                <Route path="/river">
                                    <RiverList />
                                </Route>
                                <Route path="/place">
                                    <PlaceList />
                                </Route>
                                <Route path="/member">
                                    <ProfileList />
                                </Route>
                                <Route path="/trips/:memberId(\d+)">
                                    <TripList />
                                </Route>
                                <Route path="/favorites">
                                    <FavoritesList />
                                </Route>
                            </PlaceProvider>
                        </RiverProvider>
                    </TripProvider>
                </ProfileProvider>
            </FavoriteProvider>
        </main>
    </>
}
