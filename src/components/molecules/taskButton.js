import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ChromeReaderModeOutlined } from '@mui/icons-material';
import { Checkbox, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';

export default function TaskButton() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const [taskFilter, setTaskFilter] = React.useState('');
  // Todo Controller
  const [tasks, setTasks] = useState([])
  const [newTitle, setNewTitle] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [cardOpen, setCardOpen] = useState(false)

  const addTask = () => {
    if (newTitle.trim() !== '' && newDate.trim() !== '' && newDesc.trim() !== '') {
      setTasks([...tasks, {
        id: tasks.length + 1,
        title: newTitle,
        date: newDate,
        description: newDesc,
        completed: false
      }]);
      setNewTitle('');
      setNewDate('');
      setNewDesc('');
      setCardOpen(false);
    } else {
      alert('Fill all form please')
    }
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    console.log(updatedTasks)
    setTasks(updatedTasks);
  };

  const openAdd = () => {
    setCardOpen(true)
    setNewTitle('')
    setNewDate('')
    setNewDesc('')
  }

  const noTask = tasks?.length === 0

  // Filter
  const handleChange = (event) => {
    setTaskFilter(event.target.value);
  };

  // Dialog
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);


  return (
    <React.Fragment>
      {/* Floating Button as a Toggle Dialog */}
      <ChromeReaderModeOutlined color='warning' onClick={handleClickOpen('paper')} />
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        sx={{ width: "575px", height: "550px", marginLeft: noTask ? '579px' : "555px", marginTop: noTask && '35px' }}
      >
        {/* Header of Dialog */}
        <DialogTitle id="scroll-dialog-title">
          <div className='row'>
            <div className='col-9'>
              <FormControl sx={{ marginLeft: '45px', minWidth: 120 }} size='small' >
                <InputLabel id="demo-select-small-label">My Task</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={taskFilter}
                  label="Task"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>Personal Errands</MenuItem>
                  <MenuItem value={2}>Urgent To Do</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className='col-3'>
              <Button
                id='add'
                variant="contained"
                size='medium'
                sx={{ fontSize: noTask ? '0.6rem' : '0.75rem' }}
                onClick={openAdd}>
                New Task
              </Button>
            </div>
          </div>
        </DialogTitle>

        {/* Dialog Body */}
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {/* Add todo list */}
            {cardOpen ? (
              <>
                <div className='row'>
                  <div className='col-12'>
                    <div class="card border-end-0 border-start-0">
                      <div class="row align-content-center">
                        <div className='col-1'>
                          <Checkbox size='15px' color='default' />
                        </div>
                        <div className='col-5'>
                          <input style={{
                            fontSize: '13px',
                            textDecoration: 'none'
                          }}
                            className='form-control fw-bolder text-black'
                            placeholder={`Type Task Title`}
                            onChange={(e) => setNewTitle(e.target.value)} />

                        </div>
                        <div className='col-6' style={{ height: '67px' }}>
                          <MoreVertIcon
                            fontSize='small'
                            style={{
                              transform: 'rotate(90deg)',
                              marginLeft: '9px',
                              cursor: 'pointer'
                            }}
                            type="button"
                            className='dropdown-toggle'
                            data-bs-toggle="dropdown" aria-expanded="false"
                          />
                            <ul className="dropdown-menu p-1" style={{ width: '3px' }} onClick={() => deleteTask(tasks.id)}>
                              <li><button className="dropdown-item align-content-center text-danger" disabled={cardOpen ? true : false}>Delete</button></li>
                            </ul>

                        </div>

                        <div className='row align-items-center'>
                          <div className='col-1'>
                            <ScheduleIcon color='primary' sx={{ fontSize: '15px' }} />
                          </div>
                          <div className='col-5'>
                            <input type='date' className='form-control border-black' style={{ width: '117px', fontSize: '11px' }}
                              value={newDate}
                              onChange={(e) => setNewDate(e.target.value)} />
                          </div>
                        </div>

                        <div className='row'>
                          <div className='col-1'>
                            <ModeOutlinedIcon color='primary' fontSize='15px' />
                          </div>
                          <div className='col-9'>
                            <input style={{ fontSize: '13px', maxWidth: '500px', color: 'black' }} className='form-control border-black' placeholder='description'
                              value={newDesc}
                              onChange={(e) => setNewDesc(e.target.value)} />
                          </div>
                          <div className='col-2'>
                            <button className='btn-primary' onClick={addTask}>Save</button>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
              </>
            )
            }
            {/* no Task show */}
            {tasks?.length === 0 && !cardOpen ? (
              <div className='justify-content-center align-item-center' style={{ margin: '100px 167px 183px 131px' }} >
                <h7>No Task for You</h7>
              </div>
            ) : (
              <></>
            )}
            {/* Show Data Saved */}
            {tasks.map((task) => (
              <div className='row' key={task?.id}>
                <div className='col-12'>
                  <div class="card border-end-0 border-start-0">
                    <div class="row">
                      <div className='col-1'>
                        <Checkbox size='15px' color='default' checked={task.completed}
                          onChange={() => toggleTask(task.id)} />
                      </div>
                      <div className='col-5'>
                        <h8 style={{
                          fontSize: '13px',
                          marginTop: '5px',
                          textDecoration: task.completed ? 'line-through' : 'none'
                        }}
                          className='fw-bolder'
                        >{task?.title ?? `Close off Case #012920- RODRIGUES, Amiguel`}</h8>

                      </div>
                      <div className='col-6' style={{ height: '67px' }}>
                        <span style={{ color: 'red', fontSize: '9px', marginRight: '15px' }}>2 days left</span>
                        <span style={{ fontSize: '11px' }}>{task.date ?? `12/06/2021`}</span>
                        <KeyboardArrowUpOutlinedIcon fontSize='small' sx={{ cursor: 'pointer' }} />

                        <MoreVertIcon
                          fontSize='small'
                          style={{
                            transform: 'rotate(90deg)',
                            marginLeft: '9px',
                            cursor: 'pointer'
                          }}
                          type="button"
                          className='dropdown-toggle'
                          data-bs-toggle="dropdown" aria-expanded="false"
                        />
                        <ul className="dropdown-menu p-1" style={{ width: '3px' }}>
                          <li><button className="dropdown-item align-content-center text-danger" onClick={() => deleteTask(task.id)}>Delete</button></li>
                        </ul>
                      </div>

                      <div className='row align-items-center'>
                        <div className='col-1'>
                          <ScheduleIcon color='primary' sx={{ fontSize: '15px' }} />
                        </div>
                        <div className='col-5'>
                          <span>{task.date}</span>
                        </div>
                      </div>

                      <div className='row'>
                        <div className='col-1'>
                          <ModeOutlinedIcon color='primary' fontSize='15px' />
                        </div>
                        <div className='col-11'>
                          <span style={{ fontSize: '13px' }}>{task.description ?? `All Cases must include all payment transactions, all documents and forms filled. All conversations in comments and messages in channels and emails should be provided as well in.`}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
            }
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}


