'use client'
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import styles from './header.module.css'
import React from 'react'

type Props = {}

export default function Header({}: Props) {
  return (
    <AppBar position="static" className={styles.appBarContainer}>
    <Toolbar>
      {/* <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton> */}
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        To Do App
      </Typography>
      {/* <Button color="inherit">Login</Button> */}
    </Toolbar>
  </AppBar>
  )
}