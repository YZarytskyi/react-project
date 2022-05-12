import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import './index.css';

import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, message: "I like React", likeCount: 20 },
  { id: 2, message: "JavaScript is cool", likeCount: 15 },
];

let messages = [
  { id: 1, message: "Hello, how are you" },
  { id: 2, message: "Ok" },
  { id: 3, message: "I like it" },
  { id: 4, message: "What's time is it now?" },
];

let dialogs = [
  { id: 1, name: "Dyma" },
  { id: 2, name: "Yura" },
  { id: 3, name: "Andrey" },
  { id: 4, name: "Vova" },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} messages={messages} dialogs={dialogs}/>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
