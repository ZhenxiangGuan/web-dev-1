import React from "react";
import {Link} from "react-router-dom";
import Classes from "../Practice/Classes/index.js";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./Todo/todo/TodoList.js";
import ReduxExample from "./ReduxExample/components/index";
import APIExamples from "./APIExamples";

const Practice = () => {
    return(
    <>
        <h1>Practice</h1>
        <Link to="/a8/practice">
        Practice
        </Link> |
        <Link to="/a8/twitter">
        Build
        </Link>
        <APIExamples/>
        <ReduxExample/>
        <TodoList/>
        <ConditionalOutput/>
        <Styles/>
        <Classes/>
        
        
        
      
    </>

    )
};

export default Practice;