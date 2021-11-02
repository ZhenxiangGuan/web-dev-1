import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";

const selectAllWho = (state) => state.who.who

const WhoToFollowList = () => {
    const who = useSelector(selectAllWho);
    return (
            <ul className="list-group">
            
            {who.map(who => {
                return( <WhoToFollowListItem who={who}/>
                );
            })}
            
            </ul>
); }

export default WhoToFollowList;