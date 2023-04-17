import { Link } from "react-router-dom";

function App(){
    return(
        <div className="App">
            <nav id="navbar">
                <h2>
                    <Link to="/">MoviesInfo</Link>
                </h2>
                <Link to="/movie/1">Movie</Link>
                <Link to="/search">Search</Link>

            </nav>
            <h2>MoviesInfo</h2>
        </div>
    );
}
export default App