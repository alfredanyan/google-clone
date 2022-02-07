import React from "react";
import "../../styles/FileItem.css";

import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

const monthNames = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const FileItem = ({ id, caption, timestamp, fileUrl, size }) => {
  const fileDate = `${timestamp?.toDate().getDate()} ${
    monthNames[timestamp?.toDate().getMonth()]
  }`;

  const getReadableFileSizeString = (fileSizeInBytes) => {
    let i = -1;
    const byteUnits = [" kb", " MB", " GB", " TB", " PB", " EB", " ZB", " YB"];

    do {
      fileSizeInBytes = fileSizeInBytes / 1024;
      i++;
    } while (fileSizeInBytes > 1024);

    return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
  };
  const FileItem = () => {
    return <div className="fileItem">
        <a href={fileUrl} target='_blank' download>
            <div className="fileItem--left">
                <InsertDriveFileIcon />
                <p>{caption}</p>
            </div>
            <div className="fileItem--right">
                <p>{fileDate}</p>
                <p>{getReadableFileSizeString(size)}</p>
            </div>
           </a>
    </div>
  };
};

export default FileItem;
