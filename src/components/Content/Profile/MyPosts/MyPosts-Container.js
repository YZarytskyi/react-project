import { connect } from "react-redux";
import { addPostActionCreator, onPostChangeActionCreator } from "../../../../Redux/Reducers/profile-reducer";
import MyPosts from "./MyPosts";


const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPostChange: (text) => {dispatch(onPostChangeActionCreator(text))},
    addPost: () => {dispatch(addPostActionCreator())}
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
