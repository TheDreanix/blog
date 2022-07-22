import { Link } from "react-router-dom";


const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That Page Cannot be Found</p>
            <Link to="/">Link to the HP</Link>
        </div>
     );
}
 
export default NotFound;