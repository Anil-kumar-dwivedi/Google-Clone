import { Description, LocalOffer } from "@mui/icons-material";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RoomIcon from "@mui/icons-material/Room";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { Link } from "react-router-dom";

import Search from "../components/Search";
import Response from "../response";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";

import "./SearchPage.css";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);
  //mock api
  // const data = Response;
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
            <div className="searchPage_optionsLeft">
              <div className="searchPage_option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage_option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage_option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage_option">
                <LocalOfferIcon />
                <Link to="/shopping">hoping</Link>
              </div>
              <div className="searchPage_option">
                <RoomIcon />
                <Link to="/maps">maps</Link>
              </div>
              <div className="searchPage_option">
                <MoreVertIcon />
                <Link to="/more">more</Link>
              </div>
            </div>
            <div className="searchPage_optionsRight">
              <div className="searchPage_option">
                <Link to="/Settings">Settings</Link>
              </div>
              <div className="searchPage_option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="search_page_results">
          <p className="searchPage_resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime}) seconds for {term}
          </p>
          {data?.items.map((item) => (
            <div className="searchPage_result">
              <a href={item.link} className="searchPage_resultTitle">
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage_resultImage"
                      src={item.pagemap?.cse_image[0].src}
                    />
                  )}
                {item.displayLink} ▽<h2>{item.title}</h2>
              </a>
              <p className="searchPage_resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
