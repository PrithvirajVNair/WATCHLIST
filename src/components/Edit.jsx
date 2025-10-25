import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { editListDateAPI, editListDateCompletedAPI, editListDateDroppedAPI, editListDateOnHoldAPI, editListDatePlanningAPI, editListDateWatchingAPI } from '../services/allAPIs';
import MenuItem from '@mui/material/MenuItem';
import Rating from '@mui/material/Rating';
import InputLabel from '@mui/material/InputLabel';
import StarIcon from '@mui/icons-material/Star';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Swal from 'sweetalert2'


const labels = {
    0.5: 'Appalling',
    1: 'Horrible',
    1.5: 'Very Bad',
    2: 'Bad',
    2.5: 'Average',
    3: 'Fine',
    3.5: 'Good',
    4: 'Very Good',
    4.5: 'Great',
    5: 'Masterpiece',
};


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#333', // dark background
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    color: 'white', // white text is visible now
};

function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const Edit = ({ items }) => {
    const [genre, setGenre] = useState('select')
    const [status, setStatus] = useState('select')
    const [editData, setEditData] = useState(items)
    const [value, setValue] = React.useState(3);
    const [hover, setHover] = React.useState(-1);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleEditDate = async () => {
        try {
            const { id, ...dataWithoutId } = editData
            if (dataWithoutId.status == 'planning') {
                const result = await editListDateAPI(id, dataWithoutId)
                await editListDatePlanningAPI(id, dataWithoutId)
            }
            if (dataWithoutId.status == 'watching') {
                const result = await editListDateAPI(id, dataWithoutId)
                await editListDateWatchingAPI(id, dataWithoutId)
            }
            if (dataWithoutId.status == 'completed') {
                const result = await editListDateAPI(id, dataWithoutId)
                await editListDateCompletedAPI(id, dataWithoutId)
            }
            if (dataWithoutId.status == 'dropped') {
                const result = await editListDateAPI(id, dataWithoutId)
                await editListDateDroppedAPI(id, dataWithoutId)
            }
            if (dataWithoutId.status == 'on-hold') {
                const result = await editListDateAPI(id, dataWithoutId)
                await editListDateOnHoldAPI(id, dataWithoutId)
            }
            handleClose()
            await Swal.fire({
                title: 'Success',
                text: 'Show Edited Successfully, Refresh to see Result!',
                icon: 'success',
                confirmButtonText: 'back'
            })
            window.location.reload();

        } catch (err) {
            console.log(err);

        }
    }

    return (
        <div>
            <Button onClick={handleOpen} className='text-warning'>Edit</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h2 className='mb-5'>Edit Show</h2>
                    <TextField onChange={e => setEditData({ ...editData, title: e.target.value })} value={editData?.title} id="standard-basic" variant="standard" className='w-100 mb-3' />
                    {/* Rating */}
                    <h6>Your Score</h6>
                    <Box sx={{ width: 250, display: 'flex', alignItems: 'center', marginBottom: '20px', marginLeft: '40px' }}>
                        <Rating
                            name="hover-feedback"
                            value={editData?.score}
                            precision={0.5}
                            getLabelText={getLabelText}
                            onChange={(e, newValue) => {
                                setEditData({ ...editData, score: e.target.value })
                                setValue(newValue)
                            }}
                            onChangeActive={(event, newHover) => {
                                setHover(newHover);
                            }}
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                        {value !== null && (
                            <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                        )}
                    </Box>

                    {/* genre */}
                    <h6>Genre</h6>
                    <Box sx={{ minWidth: 280, marginBottom: '20px' }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Genre</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={editData?.genre}
                                label="Genre"
                                onChange={e => {
                                    setEditData({ ...editData, genre: e.target.value })
                                    setGenre(e.target.value)
                                }}
                            >
                                <MenuItem value="select">Select Genre</MenuItem>
                                <MenuItem value="action">Action</MenuItem>
                                <MenuItem value="romance">Romance</MenuItem>
                                <MenuItem value="comedy">Comedy</MenuItem>
                                <MenuItem value="fantasy">Fantasy</MenuItem>
                                <MenuItem value="drama">Drama</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <h6>Start Date</h6>
                        <TextField value={editData?.sdate} onChange={e => setEditData({ ...editData, sdate: e.target.value })} id="standard-start-date" label="" variant="standard" type='date' className='w-100 mb-3' />
                        <h6>End Date</h6>
                        <TextField value={editData?.edate} onChange={e => setEditData({ ...editData, edate: e.target.value })} id="standard-end-date" label="" variant="standard" type='date' className='w-100 mb-3' />
                        <Button onClick={() => handleEditDate(editData)} variant="contained" className='bg-dark'>Edit</Button>
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default Edit