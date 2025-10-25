import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import { addListAPI, addListCompletedAPI, addListDroppedAPI, addListOnHoldAPI, addListPlanningAPI, addListWatchingAPI } from '../services/allAPIs';

// from Rating (onchange)

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

function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}


const Add = () => {
    const navigate = useNavigate();
    const [genre, setGenre] = useState('select')
    const [status, setStatus] = useState('select')
    console.log(genre);




    const [value, setValue] = React.useState(3);
    const [hover, setHover] = React.useState(-1);
    const [data, setData] = useState({
        title: '',
        score: '',
        genre: '',
        status: '',
        sdate: '',
        edate: ''
    })
    console.log(data);


    const handleAddList = async () => {
        try {
            const { title, genre, status } = data;

            if (!title || title.trim() === "") {
                Swal.fire({
                    title: 'Error!',
                    text: 'Title is required',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
                return;
            }

            if (!genre || genre === "select") {
                Swal.fire({
                    title: 'Error!',
                    text: 'Genre is required',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
                return;
            }

            if (!status || status === "select") {
                Swal.fire({
                    title: 'Error!',
                    text: 'Status is required',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
                return;
            }
            const result = await addListAPI(data)
            console.log(result);

            if (data.status == "planning") {
                const planningData = await addListPlanningAPI(result.data)
            }
            if (data.status == "watching") {
                const watchingData = await addListWatchingAPI(result.data)
            }
            if (data.status == "completed") {
                const watchingData = await addListCompletedAPI(result.data)
            }
            if (data.status == "on-hold") {
                const onHoldData = await addListOnHoldAPI(result.data)
            }
            if (data.status == "dropped") {
                const droppedData = await addListDroppedAPI(result.data)
            }
            Swal.fire({
                title: 'Success',
                text: 'Resume Created Successfully',
                icon: 'success',
                confirmButtonText: 'back'
            })
            navigate('/list')
        }
        catch (err) {
            console.log(err);
            Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }
    }
    console.log(typeof handleAddList);



    return (
        <div className='d-flex justify-content-center align-items-center bg-dark'>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        minWidth: 1200,
                        height: '100vh',
                    },
                }}
            >
                <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <h2 className='mb-5'>Add Your Show</h2>
                    <TextField onChange={e => setData({ ...data, title: e.target.value })} id="standard-basic" label="Title" variant="standard" className='w-25 mb-3' />

                    {/* Rating */}
                    <h6>Your Score</h6>
                    <Box sx={{ width: 250, display: 'flex', alignItems: 'center', marginBottom: '20px', marginLeft: '40px' }}>
                        <Rating
                            name="hover-feedback"
                            value={value}
                            precision={0.5}
                            getLabelText={getLabelText}
                            onChange={(e, newValue) => {
                                setData({ ...data, score: e.target.value })
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
                                value={genre}
                                label="Genre"
                                onChange={e => {
                                    setData({ ...data, genre: e.target.value })
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
                    {/* Status */}
                    <h6>Status</h6>
                    <Box sx={{ minWidth: 280, marginBottom: '20px' }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Status</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={status}
                                label="Status"
                                onChange={e => {
                                    setData({ ...data, status: e.target.value })
                                    setStatus(e.target.value)
                                }}
                            >
                                <MenuItem value="select">Select Status</MenuItem>
                                <MenuItem value="planning">Planning</MenuItem>
                                <MenuItem value="watching">Watching</MenuItem>
                                <MenuItem value="completed">Completed</MenuItem>
                                <MenuItem value="on-hold">On Hold</MenuItem>
                                <MenuItem value="dropped">Dropped</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <h6>Start Date</h6>
                    <TextField onChange={e => setData({ ...data, sdate: e.target.value })} id="standard-start-date" label="" variant="standard" type='date' className='w-25 mb-3' />
                    <h6>End Date</h6>
                    <TextField onChange={e => setData({ ...data, edate: e.target.value })} id="standard-end-date" label="" variant="standard" type='date' className='w-25 mb-3' />
                    <Button onClick={handleAddList} variant="contained" className='bg-dark'>Add</Button>
                </Paper>
            </Box>

        </div>
    )
}

export default Add