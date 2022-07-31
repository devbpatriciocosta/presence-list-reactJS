import React, {useState} from 'react';
import { TextField, Button, Paper } from '@mui/material';
import styles from './Application.module.css';

function Application () {
  return (
    <div>
      
      <Paper className={styles.application}>

        <TextField 
          id="outlined-basic" 
            label="Task" 
              variant="outlined" 
                onChange={() => setText()} 
                  fullWidth
                    />

          <Button 
            variant="contained" 
              onClick={() => toDoCreate(text)}>Add
          </Button>

      </Paper>

    </div>
  )
}

export default Application;