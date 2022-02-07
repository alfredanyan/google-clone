import React from 'react';
import '../../styles/FileView.css'


const FilesView = () => {
  return <div className='fileView'>
      <div className="fileView__row">
          {/* file cards */}
      </div>
      <div className="fileView__titles">
      <div className="fileView__titles--left">
          <p>Name</p>
      </div>
      <div className="fileView__titles--right">
          <p>Last modified</p>
          <p>File size</p>
      </div>
      </div>
  </div>
};

export default FilesView;
