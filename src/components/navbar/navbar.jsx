import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {BiMoviePlay, BiSearchAlt2} from "react-icons/bi"

import "./navbar.css";
import "./navbarResponsive.css";

const Navbar = () => {
    const [search,setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(!search) return;

        navigate(`/search?q=${search}`);
        setSearch("");
    }

    return(
        <nav id="navbar">
            <h2>
                <Link to="/">
                    <BiMoviePlay />MoviesInfo
                </Link>
            </h2>
            <form 
            onSubmit={handleSubmit}
            >
                <input 
                type="text" 
                placeholder="Busque um filme" 
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                />
                <button type="submit">
                    <BiSearchAlt2 />
                </button>
            </form>
        </nav>
    );
};

export default Navbar;