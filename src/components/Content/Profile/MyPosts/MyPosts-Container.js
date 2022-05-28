import { connect } from "react-redux";
import { addPost, addLike, removeLike } from "../../../../Redux/Reducers/profile-reducer";
import MyPosts from "./MyPosts";


const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    profile: state.profilePage.profile,
  }
}

const MyPostsContainer = connect(mapStateToProps, {addPost, addLike, removeLike})(MyPosts);

export default MyPostsContainer;
