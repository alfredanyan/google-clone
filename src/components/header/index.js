import React from "react";
import '../../styles/Header.css'
import Glogo from "../../media/google2.png";
import Photo from "../../media/alfred.png";

import SearchIcon from "@mui/icons-material/Search";

import AppsIcon from "@mui/icons-material/Apps";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";

const index = ({ userPhoto }) => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={Glogo} alt="" />
        <span>Drive</span>
      </div>
      <div className="header__searchContainer">
        <div class="header__searchBar">
        <SearchIcon />
        <input type="text" placeholder="Search files" />
        <ExpandMoreIcon />
        </div>
      </div>
      <div className="header__icons">
        <span>
          <HelpOutlineIcon />
          <SettingsIcon />
        </span>
        <AppsIcon />
        <img src={Photo} alt="User Photo" />

      </div>
    </div>
  );
};

export default index;
