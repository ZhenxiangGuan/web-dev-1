import React from "react";
const PostSummaryItem = ({
  post = {
      "topic": "Web Development",
      "userName": "ReactJS",
      "time": "2h",
      "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
      "image": "../../../images/react-blue.png"
  }
}
) => {
    return (

    <li className="list-group-item">
    <div className="row">
    <div className="col-md-10 col-sm-8">
    <span className="wd-darkgray">
        {post.topic}
      </span>
      <br/>
      <b>{post.userName}</b>
      <i className="fas fa-check-circle"></i>
      <span className="wd-darkgray"> - {post.time}</span>
      <br/>
      <b> {post.title}</b>
      <br/>
      <span className="wd-darkgray">
        123K Tweets
      </span>
    </div>
    <div className="col-md-2 col-md-2 col-sm-4">
        <img src={post.image}  className="wd-topicimg" alt=""/>
    </div>
  </div>
</li>

    
    );


}

export default PostSummaryItem;