import React from "react";

import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import Response from "../response";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import "./SearchPage.css";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  // const { data } = useGoogleSearch(term);
  const data = Response;
  console.log(data);
  return (
    <div className="search_page">
      <div className="searchPage_header">
        <Link to="/">
          <img
            className="searchPage_logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="Google"
          />
        </Link>
        <div className="searchPage_headerBody">
          <Search hideNuttons />
          <div className="searchPage_options">

          </div>
        </div>
      </div>
      <div className="search_page_results"></div>
    </div>
  );
}

export default SearchPage;
