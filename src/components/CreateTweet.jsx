import { useState } from "react";
import imgDoge from "../assets/images/doge.jpg";
import { useContext } from "react";
import { Context, ThemeContext } from "../App";

export default function CreateTweet() {
  const [content, setContent] = useState(localStorage.getItem('content')?localStorage.getItem('content'):"");
  const context = useContext(Context);
  const themeContext = useContext(ThemeContext)
  const { tweets, setTweets, user } = context;
  const {theme}=themeContext
  const addTweet = (e) => {
    e.preventDefault();
    setTweets([
      {
        ...user,
        date: "1m",
        content,
        commentCount: 0,
        retweetCount: 0,
        heartCount: 0,
        analyticsCount: 0,
      },
      ...tweets,
    ]);
  };
  function onContentChange(event) {
    setContent(event.target.value);
    localStorage.setItem('content',event.target.value)

  }
  return (
    <div className={theme === "dark" ? "create-tweet dark" : "create-tweet"}>
      <form onSubmit={addTweet}>
        <div className="avatar-section">
          <div className="profile-icon">
            <img src={imgDoge} />
          </div>
        </div>

        <div className="textarea-section">
          <textarea
            className="content"
            type="text"
            placeholder="What is happening?!"
            value={content}
            onChange={onContentChange}
          ></textarea>
        </div>

        <div></div>

        <div className="actions-section">
          <div className="actions">
            <i className="fa-regular fa-image action-icon"></i>
            <i className="fa-solid fa-list action-icon"></i>
            <i className="fa-regular fa-face-smile action-icon"></i>
            <i className="fa-regular fa-calendar action-icon"></i>
            <i className="fa-solid fa-location-dot action-icon"></i>
          </div>

          <button
            type="submit"
            disabled={content.length < 1}
            className="tweet-btn"
          >
            Tweet
          </button>
        </div>
      </form>
    </div>
  );
}
