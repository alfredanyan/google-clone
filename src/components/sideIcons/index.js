import React from "react";
import AddIcon from '@mui/icons-material/Add';
import '../../styles/SideIcons.css'

const index = () => {
  return (
    <div className="sideIcons">
      <div className="sideIcons--top">
        <img src="https://cdn.icon-icons.com/icons2/2631/PNG/512/google_calendar_new_logo_icon_159141.png" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Google_Keep_icon_%282015-2020%29.svg/512px-Google_Keep_icon_%282015-2020%29.svg.png" />
        <img src="https://www.android-user.de/wp-content/uploads/2020/10/Tasks-Icon.png" />
      </div>

      <hr />
      <div className="sideIcons__plusIcon">
          <AddIcon />
      </div>
    </div>
  );
};

export default index;
