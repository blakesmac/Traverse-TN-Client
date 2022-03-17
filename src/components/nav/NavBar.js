import React from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const history = useHistory()
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link classname="nav-link" to="/trip">Trips</Link>
            </li>
            <li className="navbar__item">
                <Link classname="nav-link" to="/river">Rivers</Link>
            </li>
            <li className="navbar__item">
                <Link classname="nav-link" to="place">Places</Link>
            </li>
            <li className="navbar__item">
                <Link classname="nav-link" to="favorites">Favorites</Link>
            </li>
            <li className="navbar__item">
                <Link classname="nav-link" to="member">Profile</Link>
            </li>
            {
                (localStorage.getItem("tt_token") !== null) ?
                    <li className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("tt_token")
                                history.push({ pathname: "/" })
                            }}
                        >Logout</button>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
    )
}
