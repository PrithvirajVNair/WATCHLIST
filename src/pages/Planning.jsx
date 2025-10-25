import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './List.css'
import { deleteListAPI, deleteListCompletedAPI, deleteListPlanningAPI, editListAPI, editListCompletedAPI, editListDroppedAPI, editListOnHoldAPI, editListPlanningAPI, editListWatchingAPI, getListAPI, getListDroppedAPI, getListOnHoldAPI, getListPlanningAPI, getListWatchingAPI } from '../services/allAPIs'
import Rating from '@mui/material/Rating';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Edit from '../components/Edit';

const Planning = () => {


  // for local state
  const [list, setList] = useState([])

  


  const getList = async () => {
    const result = await getListPlanningAPI()
    if (result && Array.isArray(result.data)) {
      setList(result.data)
    } else {
      setList([])
    }
  }

  useEffect(() => {
    getList()
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteListPlanningAPI(id)
      await deleteListAPI(id)
      await getList()
    } catch (error) {
      console.log("Error while deleting the list", error);
    }
  }

  

  const handleEdit = async (updatedItem) => {
    try {
    const { id, ...dataWithoutId } = updatedItem;

    // Update the item itself
    await editListAPI(id, dataWithoutId);

    // Move item to another list if status changed
    if (updatedItem.status !== 'planning') {
      switch (updatedItem.status) {
        case 'watching':
          await editListWatchingAPI(dataWithoutId);
          break;
        case 'completed':
          await editListCompletedAPI(dataWithoutId);
          break;
        case 'on-hold':
          await editListOnHoldAPI(dataWithoutId);
          break;
        case 'dropped':
          await editListDroppedAPI(dataWithoutId);
          break;
      }
      await deleteListPlanningAPI(id);
    }

    // Fetch the latest Planning list
    await getList();

  } catch (error) {
    console.log("Error while editing the list", error);
  }
  }


  return (
    <div className='background' style={{ minHeight: '100vh' }}>
      <div className='background-inner'>
        <div className='container-fluid'>
          <div className='d-flex flex-column justify-content-center align-items-center text-white' style={{ minHeight: '100vh', paddingTop: '100px' }}>
            <h1>Planning</h1>
            <div className='row w-100'>
              {
                Array.isArray(list) && list.length > 0 ?
                  list.map((items, index) => (
                    <div key={index} className='col-12 col-sm-6 col-md-4 col-lg-3 mt-3 mb-3 d-flex justify-content-center align-items-center'>
                      <Card sx={{ width: 350 }}>
                        <CardContent>
                          <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }} variant='div'>
                            {
                              <Box sx={{ maxWidth: 150, marginBottom: '20px' }}>
                                <FormControl fullWidth>
                                  <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                  <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={items.status}
                                    label="Status"
                                    onChange={e => {
                                      const updatedItem = { ...items, status: e.target.value };
                                      handleEdit(updatedItem)
                                    }}
                                  >
                                    <MenuItem value="planning">Planning</MenuItem>
                                    <MenuItem value="watching">Watching</MenuItem>
                                    <MenuItem value="completed">Completed</MenuItem>
                                    <MenuItem value="on-hold">On Hold</MenuItem>
                                    <MenuItem value="dropped">Dropped</MenuItem>
                                  </Select>
                                </FormControl>
                              </Box>
                            }
                          </Typography>
                          <Typography variant="h5" component="div">
                            {items.title}
                          </Typography>
                          <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>{items.genre}</Typography>
                          <Typography variant="body2">
                            <Rating name="half-rating-read" value={items.score} precision={0.5} readOnly />{items.score ? (items.score + '/5') : ' Not Rated'}
                          </Typography>
                          <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }} variant='div'>
                            {items.sdate ? `Start Date Date : ${items.sdate}` : 'Start Date Date : Not Provided'}
                            <br />
                            {items.edate ? `End Date : ${items.edate}` : 'End Date Date : Not Provided'}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          {/* <Edit eId={items.id} /> */}
                          <Button onClick={() => handleDelete(items.id)} size="small" sx={{ background: 'red' }} variant='contained'>Delete</Button>
                          <Edit items={items}/>
                        </CardActions>
                      </Card>
                    </div>
                  ))
                  :
                  <Typography variant="h5" component="div" className='text-center'>
                    No items in the list
                  </Typography>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Planning