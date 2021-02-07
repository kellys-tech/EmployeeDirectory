import React from "react";
// import "./searchresults.css";
// import API from "../../utils/API"


function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result} className="list-group-item">
          <img alt="Employee" src={result} className="img-fluid" />
          {result.email}
          {result.name.first}
          {result.name.last}
          {result.cell}
          {result.email}
          {/* {result.dob.date} */}
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
