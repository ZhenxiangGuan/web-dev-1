import React from "react"
import { Link } from "react-router-dom";

const NavigationSidebar = (
    {
        active = 'explore'
    }) => {
    return(
    <>
    <div className="list-group">
    <Link to="/a7" className={`list-group-item
        ${active === 'twitter' ? 'active' : ''}`}>
        <i className="fab fa-twitter"></i></Link>

    <Link to="/a7/build/home" className={`list-group-item
        ${active === 'home' ? 'active' : ''}`}>
        <div className="d-none d-xl-block">
        <i className="fas fa-home"></i>
        <span className="ml-1">                      
            Home                  
        </span>
        </div>

        <div className="d-xl-none">
            <i className="fas fa-home"></i>
        </div>

    </Link>

    <Link to="../../build/explore" className={`list-group-item
        ${active === 'explore' ? 'active' : ''}`}>
        <div className="d-none d-xl-block">
        <i className="fas fa-hashtag"></i>
        <span className="ml-1">                      
            Explore                 
        </span>
        </div>

        <div className="d-xl-none">
            <i className="fas fa-hashtag"></i>
        </div>

    </Link>

    <Link to="#" className={`list-group-item
        ${active === 'notification' ? 'active' : ''}`}>
        <div className="d-none d-xl-block">
        <i className="fas fa-bell"></i>
        <span className="ml-1">                      
            Notification                
        </span>
        </div>

        <div className="d-xl-none">
            <i className="fas fa-bell"></i>
        </div>

    </Link>


    <Link to="#" className={`list-group-item
        ${active === 'message' ? 'active' : ''}`}>
        <div className="d-none d-xl-block">
        <i className="fas fa-envelope"></i>
        <span className="ml-1">                      
            Message                 
        </span>
        </div>

        <div className="d-xl-none">
            <i className="fas fa-envelope"></i>
        </div>

    </Link>

    <Link to="#" className={`list-group-item
        ${active === 'bookmarks' ? 'active' : ''}`}>
        <div className="d-none d-xl-block">
        <i className="fas fa-bookmark"></i>
        <span className="ml-1">                      
            Bookmarks                  
        </span>
        </div>

        <div className="d-xl-none">
            <i className="fas fa-bookmark"></i>
        </div>

    </Link>
    
    <Link to="#" className={`list-group-item
        ${active === 'lists' ? 'active' : ''}`}>
        <div className="d-none d-xl-block">
        <i className="fas fa-list"></i>
        <span className="ml-1">                      
            Lists                 
        </span>
        </div>

        <div className="d-xl-none">
            <i className="fas fa-list"></i>
        </div>

    </Link>

    <Link to="#" className={`list-group-item
        ${active === 'profile' ? 'active' : ''}`}>
        <div className="d-none d-xl-block">
        <i className="fas fa-user-alt"></i>
        <span className="ml-1">                      
            Profile                  
        </span>
        </div>

        <div className="d-xl-none">
            <i className="fas fa-user-alt"></i>
        </div>

    </Link>
    
    <Link to="#" className={`list-group-item
        ${active === 'more' ? 'active' : ''}`}>
        <div className="d-none d-xl-block">
        <i className="fas fa-ellipsis-h wd-more "></i>
        <span className="ml-1">                      
            More                 
        </span>
        </div>

        <div className="d-xl-none">
        <i className="fas fa-ellipsis-h wd-more "></i>
        </div>

    </Link>
    
</div>

<button type="button" className="btn btn-primary wd-round-btn mt-2 p-lg-1">Tweet</button>
</>
);}

export default NavigationSidebar;
