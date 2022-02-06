import React from "react";
import Glogo from "../../media/google2.png";
import SearchIcon from '@mui/icons-material/Search';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const index = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={Glogo} alt="" />
        <span>Drive</span>
      </div>
      <div className="header__searchContainer">
        <div class="header-searchBar"></div>
          <SearchIcon/>
          <input type="text" />
          <ExpandMoreIcon/>
      </div>
      <div className="header__icons">
          <span>

          </span>
          <img src="" alt="user"/>

      </div>
    </div>
  );
};

export default index;
