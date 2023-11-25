
import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ElectricBoltOutlinedIcon from '@mui/icons-material/ElectricBoltOutlined';
import InboxButton from './inboxButton';
import TaskButton from './taskButton';

export default function FloatingButton() {
  const actions = [
    { icon: <InboxButton />, name: 'inbox' },
    { icon: <TaskButton />, name: 'task' },
  ];

  return (
    <Box sx={{ height: 550, transform: 'translateX(50px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 0, right: 75 }}
        icon={<ElectricBoltOutlinedIcon />}
        direction='left'
        transitionDuration={600}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipPlacement='top'
          />
        ))}
      </SpeedDial>
    </Box>
  );
}