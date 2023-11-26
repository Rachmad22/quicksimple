import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setChatHistory([...chatHistory, message]);
      setMessage('');
    }
  };

  return (
    <div style={{ width: '300px', margin: 'auto', padding: '20px' }}>
      <List>
        {chatHistory.map((msg, index) => (
          <React.Fragment key={index}>
            <ListItem>
              <ListItemText primary={msg} />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
      <div style={{ display: 'flex', marginTop: '10px' }}>
        <TextField
          label="Type a message"
          variant="outlined"
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <IconButton color="primary" onClick={handleSendMessage}>
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Chat;
