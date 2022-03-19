import React, {useState, createContext } from "react"

const URL = "http://localhost:8000"
export const FavoriteContext = createContext()

export const FavoriteProvider = (props) => {
    const [favorites, setFavorites] = useState([])


    const getFavorites = () => {
        return fetch(`${URL}/favorites?_expand=user&_expand=river`, {
            headers: {
                Authorization: `Token ${localStorage.getItem("tt_token")}`
            },
        })
            .then(r => r.json())
            .then(setFavorites)

    };

    const addFavorite = riverObj => {
        return fetch (`${URL}/favorites`, {
            method: "POST",
            headers: {
                Authorization: `Token ${localStorage.getItem("tt_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(riverObj)
        })
        .then(getFavorites)
    }

    const getFavoritesbyMemberId = () => {
        return fetch(`${URL}/favorites`, {
            headers: {
                Authorization: `Token ${localStorage.getItem("tt_token")}`
            },
        })
            .then(r => r.json())
    }

    const removeFavorite = (favoriteId) => {
        return fetch(`${URL}/favorites/${favoriteId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Token ${localStorage.getItem("tt_token")}`,
                "Content-Type": "application/json"
            }
        })
        .then(getFavorites)
    }

    return (
        <FavoriteContext.Provider value={{
            favorites, getFavorites, addFavorite, getFavoritesbyMemberId, removeFavorite
        }}>
            {props.children}
        </FavoriteContext.Provider>
    )
    
}