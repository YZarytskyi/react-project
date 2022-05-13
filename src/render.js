import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import { BrowserRouter } from "react-router-dom";
import { addMessage, addPost, updateNewMessageText, updateNewPostText } from "./Redux/state";


const root = ReactDOM.createRoot(document.getElementById("root"));
let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          addPost={addPost}
          updateNewPostText={updateNewPostText}
          addMessage={addMessage}
          updateNewMessageText={updateNewMessageText}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default rerenderEntireTree;
