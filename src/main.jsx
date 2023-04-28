import React from "react";
import  ReactDOM from "react-dom/client";
import { BrowserRouter,Routes,Route } from "react-router-dom";

import App from "./App";
import './index.css'

import Movie from "./pages/movie"; // aqui era para aceitar Movie com M maiusculo
import Search from "./pages/search";
import Home from "./pages/home";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<App />}>
                    <Route path="/" element={<Home />} />
                    <Route path="movie:/id" element={<Movie />} />
                    <Route path="search" element={<Search />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)