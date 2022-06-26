import React from "react";
import { FaTwitterSquare, FaTumblrSquare } from "react-icons/fa";

function Buttons({ quoteText, quoteAuthor, requestQuote, setRequestQuote }) {
  return (
    <div id="button-container">
      <a
        href={
          'https://twitter.com/intent/tweet?hashtags=quotes&text="' +
          quoteText +
          '" by ' +
          quoteAuthor
        }
        target="_blank"
        rel="noreferrer"
        id="tweet-quote"
      >
        <FaTwitterSquare />
      </a>
      <a
        href="https://www.tumblr.com/share"
        id="tumbler-quote"
        target="_blank"
        rel="noreferrer"
      >
        <FaTumblrSquare />
      </a>
      <button
        className="button"
        id="new-quote"
        onClick={() => setRequestQuote(!requestQuote)}
      >
        New Quote
      </button>
    </div>
  );
}

export default Buttons;
