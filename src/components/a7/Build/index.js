import React from "react";
import {Link} from "react-router-dom";
import ExploreScreen from "./ExploreScreen/ExploreScreen"


const Build = () => {
    return(
    <>
        <h1>Build</h1>
        <Link to="/a7/practice">
        Practice
        </Link> |
        <Link to="/a7/build">
        Build
        </Link>
        <div>
        <Route path="/a7/twitter/explore" exact={true} component={ExploreScreen}/>
        </div>

    </>
        
    )
};

export default Build;