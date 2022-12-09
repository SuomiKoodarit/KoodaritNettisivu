import React from "react";
import "./App.css";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";

function App() {
  return (
    <div className='container'>
      <section className='navbar'>
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
            >
              <Menu />
            </IconButton>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              Suomikoodarit
            </Typography>
            <Button variant='contained' color='info'>
              Discord
            </Button>
          </Toolbar>
        </AppBar>
      </section>
      <section className='header'></section>
      <section className='body'></section>
    </div>
  );
}

export default App;
