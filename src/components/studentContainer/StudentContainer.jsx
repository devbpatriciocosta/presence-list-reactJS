import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper';


function StudentContainer ({ student, deleteStudent }) {
  return (
    <div>
      <Paper>
        
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={() => deleteStudent(student.id)}>
                      <DeleteIcon />
                    </IconButton>
                    }
                    disablePadding
                    >
                    <ListItemButton role={undefined} dense>
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                              tabIndex={-1}
                                disableRipple   
                          />
                      </ListItemIcon>
                    <ListItemText primary={student.text} />
                  </ListItemButton>
                </ListItem>
        </Paper>

    </div>
  )
}

export default StudentContainer;