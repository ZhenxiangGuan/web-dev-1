import React from "react";
import {Route} from "react-router-dom";
import who from "../../reducers/who";
import tweets from "../../reducers/tweets";
import posts from "../../reducers/posts";
import {combineReducers,createStore} from "redux";
import {Provider} from "react-redux";
import HomeScreen from "./HomeScreen";
import ExploreScreen from "./ExploreScreen"

const reducer = combineReducers({tweets: tweets, who, posts})
const store = createStore(reducer);

const Build = () => {
    return(
        
        <Provider store={store}>
            <div>
                <Route path={["/a9/twitter/","/a9/twitter/home"]} exact={true} component={HomeScreen}/>
                <Route path="/a9/twitter/explore" exact={true} component={ExploreScreen}/>
            </div>
        </Provider>

    );
};

export default Build;