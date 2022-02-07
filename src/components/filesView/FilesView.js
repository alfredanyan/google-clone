import React, { useState, useEffect } from 'react';
import { db } from '../../firebase'
import '../../styles/FilesView.css'
import FileItem from './FileItem';
import FileCard from './FileCard';



const FilesView = () => {
    const [files, setFiles] = useState([])
    useEffect(() => {
        db.colllection('myFiles').onSnapshot(snapshot => {
            setFiles(snapshot.docs.map(doc => ({
                id: doc.id,
                item: doc.data()
            })))
        })
    }, [])
  return <div className='fileView'>
      <div className="fileView__row">
          {/* file cards */}
          {
              files.slice(0, 5).map(({id, item}) => (
                  <FileCard name={item.caption} />
              ))
          }
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
      {
                files.map(({ id, item }) => {
                    <FileItem id={id} caption={item.caption} />

                })
            }
  </div>
};

export default FilesView;
