import Header from "../header/Header";
import Title from "../title/Title"
import Subtitle from "../subtitle/Subtitle";
import Icon from "../subtitle/Icon";
import styles from '../subtitle/Icon.module.css'
import Application from "../application/Application";

import { style } from '@mui/system';
import { useState } from 'react';
import { Container } from '@mui/material';

function PresenceListPage () {
  return (
<>
    <div> 
      <Header />
    </div>

    <div>
      <Title>Lista de presença - Panificação 2022.2</Title>
      <Subtitle>Created by @devbpatriciocosta</Subtitle>
    </div>

    <div className={styles.icon}>      
      <Icon iconName="github" link="https://github.com/devbpatriciocosta"/>
    </div>

    <div>
      <Container maxWidth="xs" style={{ marginTop:"40px" }}>
        <Application />
      </Container>    
    </div>
</>

  )
}

export default PresenceListPage;