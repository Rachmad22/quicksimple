import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ChromeReaderModeOutlined } from '@mui/icons-material';
import { Checkbox, FormControl, InputLabel, Menu, MenuItem, Select } from '@mui/material';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';

export default function TaskButton() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const [taskFilter, setTaskFilter] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openDelete = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseDelete = () => {
    setAnchorEl(null);
  };

  const handleChange = (event) => {
    setTaskFilter(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

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
      <ChromeReaderModeOutlined color='warning' onClick={handleClickOpen('paper')} />
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        sx={{ width: "577px", height: "550px", marginLeft: "555px" }}
      >
        <DialogTitle id="scroll-dialog-title">
          <div className='row'>
            <div className='col-9'>
              <FormControl sx={{ marginLeft: '45px', minWidth: 120 }} size="small">
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
                  <MenuItem value={10}>Personal Errands</MenuItem>
                  <MenuItem value={20}>Urgent To Do</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className='col-3'>
              <Button variant="contained" size='medium' sx={{ fontSize: '0.75rem' }}>
                New Task
              </Button>
            </div>
          </div>
        </DialogTitle>

        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {[...new Array(50)]
              .map(
                () => (
                  <>
                    <div className='row'>
                      <div className='col-12'>
                        <div class="card border-end-0 border-start-0">
                          <div class="row">
                            <div className='col-1'>
                              <Checkbox size='15px' />
                            </div>
                            <div className='col-5'>
                              <h8 style={{ fontSize: '13px' }} className='fw-bolder'>
                                Close off Case #012920- RODRIGUES, Amiguel
                              </h8>
                            </div>
                            <div className='col-2'>
                              <span style={{ color: 'red', fontSize: '9px' }}>2 days left</span>
                            </div>
                            <div className='col-4'>
                              <span style={{ fontSize: '11px' }}>12/06/2021</span>
                              <KeyboardArrowUpOutlinedIcon fontSize='small' sx={{ cursor: 'pointer' }} />
                              <div>
                                <MoreVertIcon
                                fontSize='small' 
                                style={{
                                  transform: 'rotate(90deg)',
                                  marginLeft: '9px',
                                  cursor: 'pointer'
                                }}
                                  aria-controls={openDelete ? 'basic-menu' : undefined}
                                  aria-haspopup="true"
                                  aria-expanded={openDelete ? 'true' : undefined}
                                  onClick={handleClick}
                                  id="basic-button"
                                />
                                {/* <Button
                                >
                                  Dashboard
                                </Button> */}
                                <Menu
                                  id="basic-menu"
                                  anchorEl={anchorEl}
                                  open={openDelete}
                                  onClose={handleCloseDelete}
                                  MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                  }}
                                  sx={{backgroundColor: 'transparent'}}
                                >
                                  <MenuItem onClick={handleCloseDelete}>Delete</MenuItem>
                                </Menu>
                              </div>
                            </div>


                            <div className='row align-items-center'>
                              <div className='col-1'>
                                <ScheduleIcon color='primary' sx={{ fontSize: '15px' }} />
                              </div>
                              <div className='col-5'>
                                <input type='date' className='form-control' style={{ width: '117px', fontSize: '11px' }} />
                              </div>
                            </div>

                            <div className='row'>
                              <div className='col-1'>
                                <ModeOutlinedIcon color='primary' fontSize='15px' />
                              </div>
                              <div className='col-11'>
                                <span style={{ fontSize: '13px' }}>All Cases must include all payment transactions, all documents and forms filled. All conversations in comments and messages in channels and emails should be provided as well in.</span>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ),
              )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
