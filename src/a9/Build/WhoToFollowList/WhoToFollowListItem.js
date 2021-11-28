import React from "react";

const WhoToFollowListItem = ({
    who = {
        avatarIcon: '/avators/java.png',
        userName: 'NASA',
        handle: 'NASA',
    }
}) => {
    return (
        
    <li className="list-group-item">                        
    <div className="row">
        <div className="col-2 col-xl-2 col-lg-3">
            <img src={who.avatarIcon} width = "48px" className="wd-rounded ml-0" alt="ddd"/>
        </div>
        <div className="col-7 col-xl-7 col-lg-5">
            <b>{who.userName}</b>
            <i className="fas fa-check-circle"></i>
            <br/>
            @{who.handle}
        </div>
        <div className="col-3 col-xl-3 col-lg-4">
            <button className="btn btn-primary wd-round-btn m-lg-2">
                Follow
            </button>
        </div>
    </div>
</li>
    
     );

}

export default WhoToFollowListItem;