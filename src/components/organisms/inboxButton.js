// eslint-disable-next-line
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ForumOutlined } from '@mui/icons-material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { Box, CssBaseline } from '@mui/material';

// refresh dummy data
function refreshMessages() {
  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  return Array.from(new Array(50)).map(
    () => messageExamples[getRandomInt(messageExamples.length)],
  );
}

export default function InboxButton() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  // eslint-disable-next-line 
  const [value, setValue] = React.useState(0);
  const [chatClicked, setChatCkicked] = React.useState(false)
  const ref = React.useRef(null);
  const [messages, setMessages] = React.useState(() => refreshMessages());


  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChat = () => {
    setChatCkicked(true)
  }

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
    setMessages(refreshMessages());
  }, [value, setMessages]);

  return (
    <React.Fragment>
      <ForumOutlined color='secondary' onClick={handleClickOpen('paper')} />
      <Box sx={{ pb: 7 }} ref={ref}>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        sx={{ width: "550px", height: "550px", marginLeft: "630px" }}
      >
        <DialogTitle id="scroll-dialog-title" >
          <div className='search-wrapper'>
            <input type="text" className='search-text' />
            <SearchOutlinedIcon sx={{ color: "#333333" }} />
          </div>
        </DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <CssBaseline />
                <List>
                {messages.map(({ name, message, person }, index) => (
                  <ListItem button onClick={handleChat} key={index + person}>
                    <ListItemAvatar>
                      <Avatar alt="Profile Picture" src={person} />
                    </ListItemAvatar>
                    <ListItemText primary={name} secondary={message} />
                  </ListItem>
                ))}
              </List>
          </DialogContentText>
        </DialogContent>
      </Dialog>
      </Box>
    </React.Fragment>
  );
}


const messageExamples = [
  {
    id: 1,
    name: 'Antony',
    message: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
    person: '/static/images/avatar/5.jpg',
  },
  {
    id: 2,
    name: 'Ron',
    message: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
    person: '/static/images/avatar/1.jpg',
  },
  {
    id: 3,
    name: 'Agus',
    message: 'I am try out this new BBQ recipe, I think this might be amazing',
    person: '/static/images/avatar/2.jpg',
  },
  {
    id: 4,
    name: 'Rhoma',
    message: 'I have the tickets to the ReactConf for this year.',
    person: '/static/images/avatar/3.jpg',
  },
  {
    id: 5,
    name: "Dimas",
    message: 'My appointment for the doctor was rescheduled for next Saturday.',
    person: '/static/images/avatar/4.jpg',
  },
  {
    id: 6,
    name: 'Cia',
    message: `Menus that are generated by the bottom app bar (such as a bottom
      navigation drawer or overflow menu) open as bottom sheets at a higher elevation
      than the bar.`,
    person: '/static/images/avatar/5.jpg',
  },
  {
    id: 7,
    name: 'Tata',
    message: `Who wants to have a cookout this weekend? I just got some furniture
      for my backyard and would love to fire up the grill.`,
    person: '/static/images/avatar/1.jpg',
  },
];

