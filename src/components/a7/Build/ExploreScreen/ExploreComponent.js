import React from "react"
import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(
      <>
    <div className="row">
            <div className="col-11">
            <div className="input-group mb-3 flex">
                <button className="wd-lhalf-round">
                <i className="fas fa-search"></i>
                </button>
                <input type="text" className="form-control wd-rhalf-round" placeholder="Search Twitter" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
            </div>
            </div>
            <div className="col-1">
                <i className="fas fa-cog fa-2x wd-blue"></i>
        </div>
        </div>


        <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="for-you.html">For you</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="trending.html">Trending</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="news.html">News</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="sports.html">Sports</a>
        </li>
        <li className="nav-item">
            <a className="nav-link d-none d-md-block" href="enentertainment.html">Entertainment</a>
          </li>
      </ul>

      <div className="wd-relative text-center">
          <img src="/avators/img1.jpeg" className="mt-2" alt="" width="100%"/>
          <div className="wd-caption">SpaceX's Starship</div>
      </div>
      
      <PostSummaryList/>
     
      </>

    );
}
export default ExploreComponent;
