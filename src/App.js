import { useState, useEffect } from "react";
import Buttons from "./Buttons";
import Quote from "./Quote";
import axios from "axios";

function App() {
  const [quote, setQuote] = useState({});
  const [requestQuote, setRequestQuote] = useState(false);

  const quoteText = quote.q;
  const quoteAuthor = quote.a;

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios(
          "https://solvman-node-api-proxy-server.herokuapp.com/api"
        );
        setQuote(response.data[0]);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchQuote();
  }, [requestQuote]);

  return (
    <main id="quote-box" className="App">
      <Quote quoteText={quoteText} quoteAuthor={quoteAuthor} />
      <Buttons
        quoteText={quoteText}
        quoteAuthor={quoteAuthor}
        requestQuote={requestQuote}
        setRequestQuote={setRequestQuote}
      />
      <p id="attribution">
        Inspirational quotes provided by{" "}
        <a href="https://zenquotes.io/" target="_blank" rel="noreferrer">
          ZenQuotes API
        </a>
      </p>
    </main>
  );
}

export default App;
