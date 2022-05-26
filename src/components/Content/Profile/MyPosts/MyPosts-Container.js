import { connect } from "react-redux";
import { addPost } from "../../../../Redux/Reducers/profile-reducer";
import MyPosts from "./MyPosts";


const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {dispatch(addPost(newPostText))}
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
