import React from "react";
import { makeStyles } from '@material-ui/core/styles';

type VideoProps = {
  url: string,
};

export default function Video({ url }: VideoProps) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <iframe
        className={classes.iframe}
        src={url}
        frameBorder="0"
        allowFullScreen
        allow="accelerometer; autoplay; gyroscope; picture-in-picture; encrypted-media;"
        loading="lazy"
      />
    </div>
  )
}

const useStyles = makeStyles(() => ({
  container: {
    paddingTop: '56.25%',
    position: 'relative',
  },
  iframe: {
    border: '0',
    height: '100%',
    top: 0,
    left: 0,
    position: 'absolute',
    width: '100%',
  }
}))
