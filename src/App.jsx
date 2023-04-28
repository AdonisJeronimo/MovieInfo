import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/navbar";

function App(){
    return(
        <div className="App">
           <Navbar />
            <h2>MoviesInfo</h2>
            <Outlet/>
        </div>
    );
}
export default App