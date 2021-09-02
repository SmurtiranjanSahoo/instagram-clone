import React, { useState, createRef, useEffect } from "react";
import "./postModal.css";
import { withRouter, useParams } from "react-router-dom";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { connect } from "react-redux";
import { fetchPost, updateLikeNComment } from "../../actions/postActions";
import { userUpdate, fetchUser } from "../../actions/userActions";
import ImageHelper from "../../helper/ImageHelper";
import { isAutheticated } from "../../auth/auth";
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
import LoadingGif from "../../Images/loading.gif";
//components
import Header from "../Header";
import PostPage from "../GenericComponents/PostPage";
import HomePostCard from "../Home/HomePostCard";
import NavigaitionBottom from "../NavigationBottom/NavigaitionBottom";
import PostHeader from "../HeaderNav/PostHeader";
import PostOptionModal from "../GenericComponents/PostOptionModal/PostOptionModal";

const PostModal = ({
  history,
  isModal,
  fetchPost,
  postState,
  userState,
  updateLikeNComment,
  userUpdate,
  fetchUser,
}) => {
  const { isPostLoading, postDetails } = postState;
  const { userDetails } = userState;
  const { user } = isAutheticated();
  let { postid } = useParams();
  const modalRef = createRef();
  const postMRef = createRef();
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [option, setOption] = useState(false);
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState([]);
  const [save, setSave] = useState(false);
  const [updateInfo, setUpdateInfo] = useState({
    saved: postid,
  });

  const updateWindowDimensions = () => {
    setInnerWidth(window.innerWidth);
  };

  const updateSave = () => {
    if (!save === true) {
      setSave(true);
      userUpdate(updateInfo);
      fetchUser(user._id);
    } else {
      setSave(false);
      userUpdate(updateInfo);
      fetchUser(user._id);
    }
  };

  const updateLike = () => {
    if (!like === true) {
      setLike(true);
      let formData = new FormData();
      formData.set("likes", user._id);
      setLikeCount([...likeCount, user._id]);
      updateLikeNComment(postDetails._id, formData);
    } else {
      setLike(false);
      let formData = new FormData();
      formData.set("likes", user._id);
      setLikeCount(likeCount.filter((l) => l !== user._id));
      updateLikeNComment(postDetails._id, formData);
    }
  };

  useEffect(() => {
    fetchPost(postid);
    fetchUser(user._id);

    if (isModal) {
      disableBodyScroll(modalRef.current);
    }
    window.addEventListener("resize", updateWindowDimensions);
    return () => {
      enableBodyScroll(modalRef.current);
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  useEffect(() => {
    setLike(postDetails.likes?.includes(user._id));
    setLikeCount(postDetails.likes);
    setSave(userDetails.saved?.includes(postid));
  }, [postDetails.likes, userDetails.saved]);

  if (!isModal && isPostLoading) {
    return (
      <div>
        {innerWidth < 735 ? <PostHeader innerWidth={innerWidth} /> : <Header />}
        <div
          style={{
            height: "100vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img width="50px" height="50px" src={LoadingGif} alt="loading" />
        </div>
      </div>
    );
  }

  if (isModal) {
    if (isPostLoading) {
      return (
        <div
          ref={modalRef}
          className="post-modal-wrapper"
          style={{
            width: innerWidth,
            padding: "40px 20px",
            margin: "0 0 16px 0",
          }}
          onClick={() => {
            history.goBack();
            enableBodyScroll(postMRef);
          }}
        >
          <div
            role="button"
            className="post-modal-container"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div
              style={{
                height: "600px",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img width="50px" height="50px" src={LoadingGif} alt="loading" />
            </div>
          </div>
        </div>
      );
    }
    return (
      <div
        ref={modalRef}
        className="post-modal-wrapper"
        style={{
          width: innerWidth,
          padding: "40px 20px",
          margin: "0 0 16px 0",
        }}
        onClick={() => {
          history.goBack();
          enableBodyScroll(postMRef);
        }}
      >
        <div
          role="button"
          className="post-modal-container"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="post-image">
            <ImageHelper post={postDetails} />
          </div>
          <div className="post-info">
            <div className="post-header">
              <img src={userImg} alt="user profile" />
              <div className="post-header-innerdiv">
                <a href="/">{postDetails.postAuthor?.username}</a>
                <button
                  onClick={() => {
                    setOption(!option);
                    disableBodyScroll(postMRef);
                  }}
                >
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
                  <span>{postDetails.postAuthor?.username} </span>
                  {postDetails.caption}
                </div>
              </div>
            </div>
            <div className="keep-in-bottom">
              <div className="post-icons">
                <div>
                  <button
                    style={{ paddingLeft: "0px" }}
                    onClick={() => {
                      updateLike();
                    }}
                  >
                    <img src={like ? likeImgS : likeImg} alt="like" />
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
                  onClick={() => {
                    updateSave();
                  }}
                >
                  <img src={save ? savedImgS : savedImg} alt="save button" />
                </button>
              </div>
              <div className="post-like-v">
                <span>
                  <span>{likeCount?.length} </span>likes
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
        {option && (
          <PostOptionModal
            postDetails={postDetails}
            postMRef={postMRef}
            setCloseModal={() => {
              setOption(!option);
            }}
          />
        )}
      </div>
    );
  } else {
    return innerWidth <= 735 ? (
      <div>
        <Header />
        <PostHeader innerWidth={innerWidth} />
        <div ref={postMRef} style={{ margin: "44px 0 60px" }}>
          <HomePostCard
            post={postDetails}
            innerWidth={innerWidth}
            HomeRef={postMRef}
            postPageWidth={736}
          />
        </div>
        <NavigaitionBottom />
        {option && (
          <PostOptionModal
            postDetails={postDetails}
            postMRef={postMRef}
            setCloseModal={() => {
              setOption(!option);
              enableBodyScroll(postMRef);
            }}
          />
        )}
      </div>
    ) : (
      <div>
        <Header />
        <div
          className="post-no-modal-wrapper"
          style={{
            width: innerWidth,
            padding: "40px 20px",
            margin: "0 0 16px 0",
          }}
        >
          <div className="post-no-modal-container">
            <div className="post-image">
              <ImageHelper post={postDetails} />
            </div>
            <div className="post-info">
              <div className="post-header">
                <img src={userImg} alt="user profile" />
                <div className="post-header-innerdiv">
                  <a href="">{postDetails.postAuthor?.username}</a>
                  <button
                    onClick={() => {
                      setOption(!option);
                      disableBodyScroll(postMRef);
                    }}
                  >
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
                    <span>{postDetails.postAuthor?.username} </span>
                    {postDetails.caption}
                  </div>
                </div>
              </div>
              <div className="keep-in-bottom">
                <div className="post-icons">
                  <div>
                    <button
                      style={{ paddingLeft: "0px" }}
                      onClick={() => {
                        updateLike();
                      }}
                    >
                      <img src={like ? likeImgS : likeImg} alt="like" />
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
                    onClick={() => {
                      updateSave();
                    }}
                  >
                    <img src={save ? savedImgS : savedImg} alt="save button" />
                  </button>
                </div>
                <div className="post-like-v">
                  <span>
                    <span>{likeCount?.length} </span>likes
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
        </div>
        {option && (
          <PostOptionModal
            postDetails={postDetails}
            postMRef={postMRef}
            setCloseModal={() => {
              setOption(!option);
              enableBodyScroll(postMRef);
            }}
          />
        )}
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  postState: state.PostReducer,
  userState: state.UserReducer,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPost: (postId) => dispatch(fetchPost(postId)),
  updateLikeNComment: (postId, post) =>
    dispatch(updateLikeNComment(postId, post)),
  userUpdate: (user) => dispatch(userUpdate(user)),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PostModal));

//*class COMPONENT
// class PostModal extends Component {
//   constructor(props) {
//     super(props);
//     this.modalRef = React.createRef();
//     this.postMRef = React.createRef();

//     this.state = { innerWidth: window.innerWidth, option: false };
//     this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
//   }

//   updateWindowDimensions() {
//     this.setState({ innerWidth: window.innerWidth });
//   }

//   componentDidMount() {
//     const { isModal } = this.props;

//     if (isModal) {
//       disableBodyScroll(this.modalRef.current);
//     }

//     window.addEventListener("resize", this.updateWindowDimensions);
//   }

//   componentWillUnmount() {
//     enableBodyScroll(this.modalRef.current);
//     window.removeEventListener("resize", this.updateWindowDimensions);
//   }

//   render() {
//     const { postid } = this.props.match.params;
//     console.log(postid);

//     if (this.props.isModal) {
//       return (
//         <div
//           ref={this.modalRef}
//           className="post-modal-wrapper"
//           style={{
//             width: this.state.innerWidth,
//             padding: "40px 20px",
//             margin: "0 0 16px 0",
//           }}
//           onClick={() => this.props.history.goBack()}
//         >
//           <div
//             role="button"
//             className="post-modal-container"
//             onClick={(e) => {
//               e.stopPropagation();
//             }}
//           >
//             <div className="post-image">
//               <img src={userImg} alt="" />
//             </div>
//             <div className="post-info">
//               <div className="post-header">
//                 <img src={userImg} alt="user profile" />
//                 <div className="post-header-innerdiv">
//                   <a href="/">marvelstudios</a>
//                   <button
//                     onClick={() => {
//                       this.setState({ option: !this.state.option });
//                       disableBodyScroll(this.postMRef);
//                     }}
//                   >
//                     <img
//                       style={{ width: "16px", height: "16px" }}
//                       src={optionsImg}
//                       alt="option"
//                     />
//                   </button>
//                 </div>
//               </div>
//               <div className="post-comment-container">
//                 <div className="user-caption">
//                   <div>
//                     <img src={userImg} alt="user image" />
//                   </div>
//                   <div className="user-caption-innerDiv">
//                     <span>marvelstudios </span>
//                     Prepare to meet your match 👊 Tickets and pre-orders are
//                     available now for Marvel Studios' @Black.Widow. Experience
//                     it
//                   </div>
//                 </div>
//               </div>
//               <div className="keep-in-bottom">
//                 <div className="post-icons">
//                   <div>
//                     <button
//                       style={{ paddingLeft: "0px" }}
//                       //   onClick={() => {
//                       //     setLike(!like);
//                       //   }}
//                     >
//                       <img src={likeImgS} alt="like" />
//                     </button>
//                     <button>
//                       <img src={commentImg} alt="comment" />
//                     </button>
//                     <button>
//                       <img src={shareImg} alt="Share" />
//                     </button>
//                   </div>
//                   <button
//                     style={{ paddingRight: "0px" }}
//                     // onClick={() => {
//                     //   setSaved(!saved);
//                     // }}
//                   >
//                     <img src={savedImgS} alt="save button" />
//                   </button>
//                 </div>
//                 <div className="post-like-v">
//                   <span>
//                     <span>3003389 </span>likes
//                   </span>
//                 </div>
//                 <div className="post-upload-time">59 MINUTES AGO</div>
//                 <div className="post-add-comment">
//                   <form>
//                     <button className="post-add-comment-button">
//                       <img src={emojiImg} alt="emoji" />
//                     </button>
//                     <input type="text" placeholder="Add a comment..." />
//                     <button
//                       style={{
//                         color: "#0095f6",
//                         fontWeight: "600",
//                         background: "none",
//                         outline: "none",
//                         border: "none",
//                       }}
//                     >
//                       Post
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* buttons */}
//           <div className="post-modal-closeBtn">
//             <button>
//               <img src={closeBtn} alt="close button" />
//             </button>
//           </div>
//           {this.state.option ? (
//             <PostOptionModal
//               setCloseModal={() => {
//                 this.setState({ option: !this.state.option });
//                 enableBodyScroll(this.postMRef);
//               }}
//             />
//           ) : (
//             <></>
//           )}
//         </div>
//       );
//     } else {
//       return this.state.innerWidth <= 735 ? (
//         <div>
//           <Header />
//           <PostHeader innerWidth={this.state.innerWidth} />
//           <div ref={this.postMRef} style={{ margin: "44px 0" }}>
//             <PostPage
//               setOptionBtn={() => {
//                 this.setState({ option: !this.state.option });
//                 disableBodyScroll(this.postMRef);
//               }}
//               innerWidth={this.state.innerWidth}
//             />
//           </div>
//           <NavigaitionBottom />
//           {this.state.option ? (
//             <PostOptionModal
//               setCloseModal={() => {
//                 this.setState({ option: !this.state.option });
//                 enableBodyScroll(this.postMRef);
//               }}
//             />
//           ) : (
//             <></>
//           )}
//         </div>
//       ) : (
//         <div>
//           <Header />
//           <div
//             className="post-no-modal-wrapper"
//             style={{
//               width: this.state.innerWidth,
//               padding: "40px 20px",
//               margin: "0 0 16px 0",
//             }}
//           >
//             <div className="post-no-modal-container">
//               <div className="post-image">
//                 <img src={userImg} alt="" />
//               </div>
//               <div className="post-info">
//                 <div className="post-header">
//                   <img src={userImg} alt="user profile" />
//                   <div className="post-header-innerdiv">
//                     <a href="">marvelstudios</a>
//                     <button
//                       onClick={() => {
//                         this.setState({ option: !this.state.option });
//                         disableBodyScroll(this.postMRef);
//                       }}
//                     >
//                       <img
//                         style={{ width: "16px", height: "16px" }}
//                         src={optionsImg}
//                         alt="option"
//                       />
//                     </button>
//                   </div>
//                 </div>
//                 <div className="post-comment-container">
//                   <div className="user-caption">
//                     <div>
//                       <img src={userImg} alt="user image" />
//                     </div>
//                     <div className="user-caption-innerDiv">
//                       <span>marvelstudios </span>
//                       Prepare to meet your match 👊 Tickets and pre-orders are
//                       available now for Marvel Studios' @Black.Widow. Experience
//                       it
//                     </div>
//                   </div>
//                 </div>
//                 <div className="keep-in-bottom">
//                   <div className="post-icons">
//                     <div>
//                       <button
//                         style={{ paddingLeft: "0px" }}
//                         //   onClick={() => {
//                         //     setLike(!like);
//                         //   }}
//                       >
//                         <img src={likeImgS} alt="like" />
//                       </button>
//                       <button>
//                         <img src={commentImg} alt="comment" />
//                       </button>
//                       <button>
//                         <img src={shareImg} alt="Share" />
//                       </button>
//                     </div>
//                     <button
//                       style={{ paddingRight: "0px" }}
//                       onClick={() => {
//                         // setSaved(!saved);
//                         console.log("clicked");
//                       }}
//                     >
//                       <img src={savedImgS} alt="save button" />
//                     </button>
//                   </div>
//                   <div className="post-like-v">
//                     <span>
//                       <span>3003389 </span>likes
//                     </span>
//                   </div>
//                   <div className="post-upload-time">59 MINUTES AGO</div>
//                   <div className="post-add-comment">
//                     <form>
//                       <button className="post-add-comment-button">
//                         <img src={emojiImg} alt="emoji" />
//                       </button>
//                       <input type="text" placeholder="Add a comment..." />
//                       <button
//                         style={{
//                           color: "#0095f6",
//                           fontWeight: "600",
//                           background: "none",
//                           outline: "none",
//                           border: "none",
//                         }}
//                       >
//                         Post
//                       </button>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {this.state.option ? (
//             <PostOptionModal
//               setCloseModal={() => {
//                 this.setState({ option: !this.state.option });
//                 enableBodyScroll(this.postMRef);
//               }}
//             />
//           ) : (
//             <></>
//           )}
//         </div>
//       );
//     }
//   }
// }
// export default withRouter(PostModal);
