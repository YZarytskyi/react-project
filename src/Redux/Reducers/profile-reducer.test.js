import profileReducer, { addPost, deletePost } from "./profile-reducer";

let state = {
  posts: [
    { id: 1, message: "I like React", likeCount: 20 },
    { id: 2, message: "JavaScript is cool", likeCount: 15 },
  ]
};

test('length of posts should be incremented', () => {
  // 1. test data
  let action = addPost('itkamasutra')
  // 2. action
  let newState = profileReducer(state, action)
  // 3. expectation
  expect(newState.posts.length).toBe(3);
});

test('message of new post should be correct', () => {
  // 1. test data
  let action = addPost('itkamasutra')
  // 2. action
  let newState = profileReducer(state, action)
  // 3. expectation
  expect(newState.posts[2].message).toBe('itkamasutra');
});

test('after deleting length of posts should be decrement', () => {
  // 1. test data
  let action = deletePost(1)
  // 2. action
  let newState = profileReducer(state, action)
  // 3. expectation
  expect(newState.posts.length).toBe(1);
});

test(`after deleting length shouldn't be decrement if id incorrect`, () => {
  // 1. test data
  let action = deletePost(1000)
  // 2. action
  let newState = profileReducer(state, action)
  // 3. expectation
  expect(newState.posts.length).toBe(2);
});