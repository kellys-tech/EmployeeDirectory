import React from "react";
import "./searchresults.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result} className="list-group-item">
          <img alt="User" src={result} className="img-fluid" />
          {result.email}
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
