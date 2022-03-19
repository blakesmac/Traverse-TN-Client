import React, {useContext, useEffect} from "react"
import { useHistory, useParams } from "react-router"
import { FavoriteContext } from "./FavoriteProvider"

export const FavoritesList = () => {
    const history = useHistory()
    const { favorite, favorites, getFavorites, removeFavorite} = useContext(FavoriteContext)
    const { favoriteId} =useParams()
    useEffect(() => {
        getFavorites()
    }, [])

    const handleDeleteFav = () => {
        removeFavorite(favoriteId)
        .then(()=> {
            history.push("/favorites")
        })
    }

    return (
        <article className="favoritess">
            <header className="favorites_header">
                <h1>Favorites</h1>
            </header>
            {favorites.map((favorite) => {
                return (
                    <section className="favorites">
                        <div className="favorite_river">River: {favorite.riverId}</div>
                        <div className="favorite_place">Address: {favorite.placeId}</div>
                        <div className="favorite_member">Member: {favorite.memberId}</div>
                        <button size="medium" className="deletePlant_button" onClick={event => {
                        event.preventDefault()

                        handleDeleteFav()
                        }}>{favoriteId ? <>Remove Favorite</> : <> DELETE</> } </button>
                    </section>
                )
            })}
        </article>
    )
}