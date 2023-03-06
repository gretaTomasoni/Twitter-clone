import TweetComment from "../../assets/img/comment.png";
import TweetRepost from "../../assets/img/repost.png";
import TweetLike from "../../assets/img/like.png";
import TweetShare from "../../assets/img/share.png";
import "./index.css";

const Tweet = ({ messageData }) => {
  return (
    <div className="Tweet">
      <img
        className="Tweet_image"
        src={messageData.photo}
        alt="profile image"
      />
      <div>
        <div className="Tweet_profile">
          <span className="Tweet_userName">{messageData.userName}</span>
          <span className="Tweet_email">{messageData.email}</span>
        </div>
        <p className="Tweet_body">{messageData.body}</p>
        <div className="Tweet_reactions">
          <div className="Tweet_comment">
            <img src={TweetComment} alt="comment" />
            <span>70</span>
          </div>
          <div className="Tweet_repost">
            <img src={TweetRepost} alt="repost" />
            <span>40</span>
          </div>
          <div className="Tweet_like">
            <img src={TweetLike} alt="like" />
            <span>134</span>
          </div>
          <div className="Tweet_share">
            <img src={TweetShare} alt="share" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;