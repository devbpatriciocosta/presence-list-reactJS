import React, {useState} from 'react';
import { TextField, Button, Paper } from '@mui/material';
import styles from './Application.module.css';


function Application ({ addStudent }) {
  const [text, setStudent] = useState(null);
  const [id, setId] = useState(0);

  const studentCreate = (text) => {
    const studentObject = 
    { 
      text: text, 
      id: id 
    };
    setId(id + 1);
    addStudent(studentObject);
    document.getElementById("outlined-basic").value = null;
  }

  return (
    <div>

      <Paper className={styles.application}>

        <TextField 
          id="outlined-basic" 
            label="Student Name" 
              variant="outlined" 
                onChange={(Student) => setStudent(Student.target.value)} 
                  fullWidth
                    />

          <Button 
            variant="contained" 
              onClick={() => studentCreate(text)}>Add
          </Button>

      </Paper>

    </div>
  )
}

export default Application;