import React from "react";
import { makeStyles, Theme } from '@material-ui/core/styles';
import Link from "next/link";
import { useAuth} from "../lib/useAuth";
import {
  AppBar,
  Toolbar,
  Link as LinkText,
  Typography,
  Button,
  Switch,
} from '@material-ui/core';

export default function Header({ darkState, handleThemeChange }) {
  const classes = useStyles();
  const { user } = useAuth();

  const links = [
    !user && { label: 'Sign Up', href: '/auth/signup' },
    !user && { label: 'Sign In', href: '/auth/signin' },
    user && { label: 'Create', href: '/stream/new' },
    user && { label: 'Sign Out', href: '/auth/signout' },
  ]
    .filter(link => link)
    .map(({ label, href }) => {
      return (
        <Link href={href} key={href}>
          <Button color="inherit">{ label }</Button>
        </Link>
      )
    });

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link href="/">
              <LinkText href="" color="inherit">
                Stream.me
              </LinkText>
            </Link>
          </Typography>
          <Switch checked={darkState} onChange={handleThemeChange}/>
          { links }
        </Toolbar>
      </AppBar>
    </div>
  )
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  }
}));
