import React from "react";
import {Link} from "react-router-dom";
import Classes from "../Practice/Classes/index.js";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./Todo/todo/TodoList.js";

const Practice = () => {
    return(
    <>
        <h1>Practice</h1>
        <Link to="/a6/practice">
        Practice
        </Link> |
        <Link to="/a6/build">
        Build
        </Link>
        <TodoList/>
        <ConditionalOutput/>
        <Styles/>
        <Classes/>
        
        
        
      
    </>

    )
};

export default Practice;