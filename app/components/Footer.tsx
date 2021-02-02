import React from "react";
import {
  Typography,
  Toolbar,
  AppBar,
  Link as LinkText,
} from '@material-ui/core';
import {makeStyles, Theme} from "@material-ui/core/styles";
import Link from 'next/link';

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <LinkText href="https://rs.school/js/" target="_blank" color="inherit">
            <img src="/rs-school-logo.svg" alt="Logo" className={classes.img}/>
          </LinkText>
          <Typography variant="h6" className={classes.linkGit}>
            Created: 2021: <LinkText href="https://github.com/alpoliakov" target="_blank" color="inherit">
              @alpoliakov
            </LinkText> <LinkText href="https://github.com/pam-param" target="_blank" color="inherit">
            @pam-param
          </LinkText>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  linkGit: {
    flexGrow: 1,
    textAlign: 'end',
  },
  appBar: {
    width: '100%',
    top: 'auto',
    bottom: 0,

  },
  toolbar: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'
  },
  img: {
    height: 32,
  }
}));
