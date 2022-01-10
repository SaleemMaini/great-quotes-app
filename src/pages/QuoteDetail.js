import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import {
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import React, { useEffect } from "react";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuoteFound from "../components/quotes/NoQuotesFound";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

const QuoteDetail = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getSingleQuote, true);
  const params = useParams();
  const match = useRouteMatch();

  const { quoteId } = params;
  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="centered focused">{error.message}</p>
  }
  if (!loadedQuotes.text) {
    return <NoQuoteFound />;
  }
  return (
    <section>
      <HighlightedQuote text={loadedQuotes.text} author={loadedQuotes.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Show Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}`}>
            Hide Comments
          </Link>
        </div>
      </Route>
    </section>
  );
};
export default QuoteDetail;
