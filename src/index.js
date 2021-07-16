import React from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'
import './index.css'

function Avatar({ hash }) {
  /* 'https://cdn.myanimelist.net/images/characters/5/171719.webp' */
  const url = `https://cdn.myanimelist.net/images/characters/5/${hash}`;
  return (
    <img src={url}
      className="avatar"
      alt="avatar" />
  )
}

function Message({ text }) {
  return (
    <div className="message">
      {text}
    </div>
  )
}

function Author({ author }) {
  const { name, handle } = author
  return (
    <span className="author">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  )
}

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return (<span className="time">{timeString}</span>)
}

const ReplyButton = () => (
  <i className="fa fa-reply reply-button" />
)

function Count({ count }) {
  if (count > 0) {
    return (
      <span className="retweet-count">
        {count}
      </span>
    );
  } else {
    return null;
  }
}
const RetweetButton = ({ count }) => (
  <span className="retweet-button">
    <i className="fa fa-retweet" />
    <Count count={count} />
  </span>
);


const LikeButton = ({ count }) => (
  <span className="like-button" >
    <i className="fa fa-heart" />
    <span className="like-count">
      {count ? count : null}
    </span>
  </span>
)

const MoreOptionsButton = () => (
  <i className=" fa fa-ellipsis-h more-options-button" />
)

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <Author author={tweet.author} /><Time time={tweet.timestamp} />
        <Message text={tweet.message} />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}


const testTweet = {
  message: "Los pensadores esenciales piensan lo verdadero, a pe­sar de los errores en que incurren",
  gravatar: "171719.webp",
  author: { handle: "filosofia.com", name: "Heidegger" },
  likes: 14,
  retweets: 2,
  timestamp: "2021-06-6 12:17:35"
};


ReactDOM.render(<Tweet tweet={testTweet} />, document.querySelector('#root'));