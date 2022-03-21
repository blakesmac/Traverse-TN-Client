import React, {useContext, useEffect} from "react"
import { useParams } from "react-router"
import { ProfileContext } from "./ProfileProvider"

export const ProfileList = () => {
    const {profile, getProfile, getTripsByMember} = useContext(ProfileContext)


    useEffect(() => {
        getProfile();
    }, [])

    useEffect(() => {
        if (profile.member) {
            getTripsByMember(profile.member.id)
            

        }
    }, [profile])

    return (
        <>
            <h2>{profile.member?.user.first_name} {profile.member?.user.last_name}</h2>
            <section className="profile">
                <div className="user_info">
                    <div>
                        Username: {profile.member?.user.username}
                    </div>
                    <div>
                        About: {profile.member?.about}
                    </div>
                </div>
            </section>
            <section className="posts">
                {/* <div className="user_posts">
                    Trips: {profile.trip?.member}
                </div> */}
            </section>
        </>
    )




}