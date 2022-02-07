import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import '../../styles/NewFile.css'


import firebase from 'firebase'
import { storage, db } from '../../firebase'

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
    return {
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`
    }
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadow[5],
        padding: theme.spacing[2, 4, 3],
    },
}));

const NewFile = () => {
    const classes = useStyles();

    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false)

    return (
        <div className="newFile">
            <div className="newfile__container">
                <AddIcon />
                <p>New</p>
            </div>
        </div>
    )
}
export default NewFile;
