import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

function Quote({ quoteText, quoteAuthor }) {
  return (
    <div>
      <p id="text">
        <FaQuoteLeft style={{ paddingRight: 5 }} />
        {quoteText}
      </p>
      <p id="author">{quoteAuthor}</p>
    </div>
  );
}

export default Quote;
