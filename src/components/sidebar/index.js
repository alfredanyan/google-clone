import React from "react";
import NewFile from "./NewFile";
import SidebarItem from "./SidebarItem";

const index = () => {
  return (
    <div className="sidebar">
      <NewFile />
      <div className="sidebar__itemsContainer">
        <SidebarItem arrow icon={<InsertDriveFileIcon />} label={"My Drive"} />
        <SidebarItem
          arrow
          icon={<ImportantDevicesIcon />}
          label={"Computers"}
        />
        <SidebarItem icon={<PeopleAltIcon />} label={"Shared with me"} />
        <SidebarItem icon={<QueryBuilderIcon />} label={"Recent"} />
        <SidebarItem icon={<StartBorderIcon />} label={"Starred"} />
        <SidebarItem icon={<DeleteOutlineIcon />} label={"Bin"} />
      </div>
    </div>
  );
};

export default index;
