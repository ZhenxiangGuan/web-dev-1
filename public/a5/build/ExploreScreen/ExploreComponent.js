import PostSummaryItem from "../PostSummaryList/PostSummaryItem.js";
import exploreItems  from "../PostSummaryList/post.js";

const ExploreComponent = () => {
    return(`
    <div class="row">
            <div class="col-11">
            <div class="input-group mb-3 flex">
                <button class="wd-lhalf-round">
                <i class="fas fa-search"></i>
                </button>
                <input type="text" class="form-control wd-rhalf-round" placeholder="Search Twitter" aria-label="Example text with button addon" aria-describedby="button-addon1">
            </div>
            </div>
            <div class="col-1">
                <i class="fas fa-cog fa-2x wd-blue"></i>
        </div>
        </div>


        <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="for-you.html">For you</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="trending.html">Trending</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="news.html">News</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="sports.html">Sports</a>
        </li>
        <li class="nav-item">
            <a class="nav-link d-none d-md-block" href="enentertainment.html">Entertainment</a>
          </li>
      </ul>

      <div class="wd-relative text-center">
          <img src="../../twitter/explore/img1.jpeg" class="mt-2" alt="" width="100%">
          <div class="wd-caption">SpaceX's Starship</div>
      </div>
      <div class="list-group">
      ${exploreItems.map(post => {
        return PostSummaryItem(post);
      }).join('')}
      </div>


    `);
}
export default ExploreComponent;
