import { Grid } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
const Timer = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.timer}
    >
      <Grid item xs={2}>
        <p>{timerDays}</p>
        <small className={classes.caption}>Days</small>
      </Grid>
      <Grid item xs={1}></Grid>
      <Grid item xs={2}>
        <p>{timerHours}</p>
        <small className={classes.caption}>Hours</small>
      </Grid>
      <Grid item xs={1}></Grid>
      <Grid item xs={2}>
        <p>{timerMinutes}</p>
        <small className={classes.caption}>Minutes</small>
      </Grid>
      <Grid item xs={1}></Grid>
      <Grid item xs={2}>
        <p>{timerSeconds}</p>
        <small className={classes.caption}>Seconds</small>
      </Grid>
    </Grid>
  );
};
Timer.defaultProps = {
  timerDays: "00",
  timerHours: "00",
  timerMinutes: "00",
  timerSeconds: "00",
};

export default Timer;
