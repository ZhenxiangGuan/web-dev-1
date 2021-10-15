const PostSummaryItem = (post) => {
    return (`

    <li class="list-group-item">
    <div class="row">
    <div class="col-md-10 col-sm-8">
    <span class="wd-darkgray">
        ${post.topic}
      </span>
      <br>
      <b>${post.userName}</b>
      <i class="fas fa-check-circle"></i>
      <span class="wd-darkgray"> - ${post.time}</span>
      <br>
      <b> ${post.title}</b>
      <br>
      <span class="wd-darkgray">
        123K Tweets
      </span>
    </div>
    <div class="col-md-2 col-md-2 col-sm-4">
        <img src=" ${post.image}"  class="wd-topicimg" alt="">
    </div>
  </div>
</li>

    
    `);


}

export default PostSummaryItem;