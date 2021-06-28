import React, { useState, Component } from "react";
import { withRouter } from "react-router-dom";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import "./postModal.css";
//images
import userImg from "../../Images/profileimg.jpg";
import optionsImg from "../../Images/PostCard/options.svg";
import likeImg from "../../Images/PostCard/like.svg";
import likeImgS from "../../Images/PostCard/likeS.svg";
import commentImg from "../../Images/PostCard/comment.svg";
import shareImg from "../../Images/PostCard/share.svg";
import savedImg from "../../Images/PostCard/saved.svg";
import savedImgS from "../../Images/PostCard/savedS.svg";
import emojiImg from "../../Images/PostCard/emoji.svg";
import closeBtn from "../../Images/PostModal/closeBtn.svg";

class PostModal extends Component {
  constructor() {
    super();
    this.modalRef = React.createRef();
  }
  componentDidMount() {
    const { isModal } = this.props;

    if (isModal) {
      disableBodyScroll(this.modalRef.current);
    }
  }

  componentWillUnmount() {
    enableBodyScroll(this.modalRef.current);
  }

  render() {
    const { id } = this.props.match.params;

    if (this.props.isModal) {
      return (
        <div
          ref={this.modalRef}
          className="post-modal-wrapper"
          onClick={() => this.props.history.goBack()}
        >
          <div
            role="button"
            className="post-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="post-image">
              <img src={userImg} alt="" />
            </div>
            <div className="post-info">
              <div className="post-header">
                <img src={userImg} alt="user profile" />
                <div className="post-header-innerdiv">
                  <a href="">marvelstudios</a>
                  <button>
                    <img
                      style={{ width: "16px", height: "16px" }}
                      src={optionsImg}
                      alt="option"
                    />
                  </button>
                </div>
              </div>
              <div className="post-comment-container">
                <div className="user-caption">
                  <div>
                    <img src={userImg} alt="user image" />
                  </div>
                  <div className="user-caption-innerDiv">
                    <span>marvelstudios </span>
                    Prepare to meet your match 👊 Tickets and pre-orders are
                    available now for Marvel Studios' @Black.Widow. Experience
                    it
                  </div>
                </div>
              </div>
              <div className="keep-in-bottom">
                <div className="post-icons">
                  <div>
                    <button
                      style={{ paddingLeft: "0px" }}
                      //   onClick={() => {
                      //     setLike(!like);
                      //   }}
                    >
                      <img src={likeImgS} alt="like" />
                    </button>
                    <button>
                      <img src={commentImg} alt="comment" />
                    </button>
                    <button>
                      <img src={shareImg} alt="Share" />
                    </button>
                  </div>
                  <button
                    style={{ paddingRight: "0px" }}
                    // onClick={() => {
                    //   setSaved(!saved);
                    // }}
                  >
                    <img src={savedImgS} alt="save button" />
                  </button>
                </div>
                <div className="post-like-v">
                  <span>
                    <span>3003389 </span>likes
                  </span>
                </div>
                <div className="post-upload-time">59 MINUTES AGO</div>
                <div className="post-add-comment">
                  <form>
                    <button className="post-add-comment-button">
                      <img src={emojiImg} alt="emoji" />
                    </button>
                    <input type="text" placeholder="Add a comment..." />
                    <button
                      style={{
                        color: "#0095f6",
                        fontWeight: "600",
                        background: "none",
                        outline: "none",
                        border: "none",
                      }}
                    >
                      Post
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* buttons */}
          <div className="post-modal-closeBtn">
            <button>
              <img src={closeBtn} alt="close button" />
            </button>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(PostModal);

// const PostModal = ({ history }) => {
//   const [like, setLike] = useState("false");
//   const [saved, setSaved] = useState("false");

//   return (
//     <div className="post-modal-wrapper">
//       <div
//         role="button"
//         className="post-modal-container"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="post-image">
//           <img src={userImg} alt="" />
//         </div>
//         <div className="post-info">
//           <div className="post-header">
//             <img src={userImg} alt="user profile" />
//             <div className="post-header-innerdiv">
//               <a href="">marvelstudios</a>
//               <button>
//                 <img
//                   style={{ width: "16px", height: "16px" }}
//                   src={optionsImg}
//                   alt="option"
//                 />
//               </button>
//             </div>
//           </div>
//           <div className="post-comment-container">
//             <div className="user-caption">
//               <div>
//                 <img src={userImg} alt="user image" />
//               </div>
//               <div className="user-caption-innerDiv">
//                 <span>marvelstudios </span>
//                 Prepare to meet your match 👊 Tickets and pre-orders are
//                 available now for Marvel Studios' @Black.Widow. Experience it
//               </div>
//             </div>
//           </div>
//           <div className="keep-in-bottom">
//             <div className="post-icons">
//               <div>
//                 <button
//                   style={{ paddingLeft: "0px" }}
//                   onClick={() => {
//                     setLike(!like);
//                   }}
//                 >
//                   <img src={like ? likeImg : likeImgS} alt="like" />
//                 </button>
//                 <button>
//                   <img src={commentImg} alt="comment" />
//                 </button>
//                 <button>
//                   <img src={shareImg} alt="Share" />
//                 </button>
//               </div>
//               <button
//                 style={{ paddingRight: "0px" }}
//                 onClick={() => {
//                   setSaved(!saved);
//                 }}
//               >
//                 <img src={saved ? savedImg : savedImgS} alt="save button" />
//               </button>
//             </div>
//             <div className="post-like-v">
//               <span>
//                 <span>3003389 </span>likes
//               </span>
//             </div>
//             <div className="post-upload-time">59 MINUTES AGO</div>
//             <div className="post-add-comment">
//               <form>
//                 <button className="post-add-comment-button">
//                   <img src={emojiImg} alt="emoji" />
//                 </button>
//                 <input type="text" placeholder="Add a comment..." />
//                 <button
//                   style={{
//                     color: "#0095f6",
//                     fontWeight: "600",
//                     background: "none",
//                     outline: "none",
//                     border: "none",
//                   }}
//                 >
//                   Post
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* buttons */}
//       <div className="post-modal-closeBtn">
//         <button>
//           <img src={closeBtn} alt="close button" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PostModal;
