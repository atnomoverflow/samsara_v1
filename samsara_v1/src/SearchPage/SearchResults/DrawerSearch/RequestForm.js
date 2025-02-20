import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {
  Container,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import TextField from "@material-ui/core/TextField";

import { makeStyles } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  propretyInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    padding: "30px",
    background: "#f6f6f6",
    borderBottom: "1px solid #eeeef0",
  },
  info: {
    flex: "0 0 68px",
    width: "68px",
    height: "68px",
    marginRight: "15px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50%",
    backgroundSize: "cover",
    borderSadius: "5px",
  },
  price: {
    fontSize: "19px",
    lineHeight: "20px",
  },
  nameContainer: {
    display: "flex",
    alignItems: "center",
    paddingBottom: "10px",
  },
  name: {
    maxWidth: "180px",
    overflow: "hidden",
    fontWeight: "600",
    fontSize: "13px",
    lineHeight: "100%",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  phoneContainer: {
    display: "flex",
    alignItems: "center",
  },
  phone: {
    fontSize: "13px",
    lineHeight: "100%",
    color: "#2e64e2",
    textDecoration: "none",
    cursor: "pointer",
  },
  hoursText: {
    paddingBottom: "6px",
    fontSize: "13px",
    lineHeight: "140%",
    paddingTop: "24px",
  },
  hoursToday: {
    paddingBottom: "6px",
    fontSize: "13px",
    lineHeight: "140%",
  },
  header: {
    fontWeight: "500",
    fontSize: "26px",
    lineHeight: "32px",
    paddingBottom: "20px",
    color: "#2a2b2c",
  },
  terms: {
    color: "#697179",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "16px",
    display: "inline",
  },
  formRow: {
    padding: "20px 30px",
    borderTop: "1px solid #d5d9dc",
  },
  bottomBar: {
    padding: "20px 30px",
    borderTop: "1px solid #d5d9dc",
  },
  secondaryBut: {
    padding: "7px 15px",
    color: "#2a2b2c",
    background: "#fff",
    border: "1px solid rgba(0,0,0,.05)",
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 10%)",
  },
  primaryBut: {
    padding: "7px 15px",
    color: "#fff",
    background: "#2e64e2",
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 20%)",
    textDecoration: "none",
  },
  subHeader: {
    lineHeight: "24px",
    fontFamily: "Helvetica,Arial,sans-serif",
    fontSize: "medium",
  },
}));
const RequestForm = (props) => {
  const [TourDate, setTourDate] = useState();
  const handleChangeOfTourDate = (event) => {
    setTourDate(event.target.value);
  };
  const [TimeChosen, setTimeChosen] = useState(1);
  const handleAddOfTimeChosen = () => {
    if(TimeChosen<3){
    setTimeChosen(TimeChosen+1);
    }
  };
  const handleReduceOfTimeChosen = () => {
    if(TimeChosen<=3){
      setTimeChosen(TimeChosen-1);
      }

  };
  const [TourTime, setTourTime] = useState();
  const handleChangeOfTourTime = (event) => {
    setTourTime(event.target.value);
  };
  const [state, setstate] = useState(true);
  const handelStateChange = (event) => {
    setstate(!state);
  };
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2020-05-04T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const workingDays = [];
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  for (let i = 0; i < 14; i++) {
    if (!(tomorrow.getDay() == 0)) workingDays.push(tomorrow.toDateString());
    tomorrow.setDate(tomorrow.getDate() + 1);
  }
  const workingHours = [];
  today.setHours(9);
  today.setMinutes(0);

  while (today.getHours() <= 16) {
    let time = `${
      today.getHours() % 12 < 10 && today.getHours() != 12
        ? "0" + (today.getHours() % 12)
        : today.getHours()
    }:${
      today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes()
    } ${today.getHours() < 12 ? "AM" : "PM"}`;
    workingHours.push(time);
    today.setMinutes(today.getMinutes() + 15);
  }
  return (
    <Dialog
      onClose={props.onClose}
      aria-labelledby="simple-dialog-title"
      open={props.open}
      fullWidth={true}
      maxWidth="md"
    >
      <Grid justify="center" container>
        <Grid xs={12} item>
          <Grid container>
            <Grid xs={8} item>
              <Grid spacing={2} container>
                <Container style={{ padding: "20px 30px" }}>
                  <Grid xs={12} item>
                    <Typography
                      className={classes.header}
                      component="h1"
                      variant="h4"
                    >
                      Tour this place
                    </Typography>
                  </Grid>
                  <Grid xs={12} item>
                    <Typography
                      className={classes.subHeader}
                      component="h4"
                      variant="h5"
                    >
                      Provide your availability for a tour in the property's
                      time zone.
                    </Typography>
                  </Grid>
                  <Grid
                    style={{ paddingTop: "19px" }}
                    justify="space-around"
                    spacing={2}
                    container
                  >
                    <Grid xs={12} item>
                      <TextField
                        autoFocus
                        margin="none"
                        id="Full-Name"
                        label="Full Name"
                        type="Name"
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <TextField
                        autoFocus
                        margin="none"
                        id="Phone"
                        label="Phone"
                        type="Phone"
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <TextField
                        autoFocus
                        margin="none"
                        id="Email"
                        label="Email"
                        type="Email"
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                          fullWidth
                          disableToolbar
                          format="MM/dd/yyyy"
                          margin="normal"
                          id="date-picker-inline"
                          label="Move-In Date"
                          value={selectedDate}
                          onChange={handleDateChange}
                          KeyboardButtonProps={{
                            "aria-label": "change date",
                          }}
                          inputVariant="outlined"
                        />
                      </MuiPickersUtilsProvider>
                    </Grid>
                    {TimeChosen>0?<Grid xs={12} item>
                      <Grid spacing={2} container>
                        <Grid xs={5} item>
                          <FormControl
                            variant="outlined"
                            className={classes.formControl}
                            fullWidth
                          >
                            <InputLabel id="demo-simple-select-outlined-label">
                              Date
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              value={TourDate}
                              onChange={handleChangeOfTourDate}
                              label="Date"
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              {workingDays.map((day) => (
                                <MenuItem value={day}>{day}</MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid xs={4} item>
                          <FormControl
                            variant="outlined"
                            className={classes.formControl}
                            fullWidth
                          >
                            <InputLabel id="demo-simple-select-outlined-label">
                              time
                            </InputLabel>
                            <Select
                              native
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              value={TourTime}
                              onChange={handleChangeOfTourTime}
                              label="time"
                            >
                              <option aria-label="None" value="" />

                              {workingHours.map((h) => (
                                <option value={h}>{h}</option>
                              ))}
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid xs={2} item>
                          <IconButton
                            aria-label="delete"
                            onClick={handleReduceOfTimeChosen}
                          >
                            <ClearIcon />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </Grid>:null}
                    {TimeChosen>1?<Grid xs={12} item>
                      <Grid spacing={2} container>
                        <Grid xs={5} item>
                          <FormControl
                            variant="outlined"
                            className={classes.formControl}
                            fullWidth
                          >
                            <InputLabel id="demo-simple-select-outlined-label">
                              Date
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              value={TourDate}
                              onChange={handleChangeOfTourDate}
                              label="Date"
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              {workingDays.map((day) => (
                                <MenuItem value={day}>{day}</MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid xs={4} item>
                          <FormControl
                            variant="outlined"
                            className={classes.formControl}
                            fullWidth
                          >
                            <InputLabel id="demo-simple-select-outlined-label">
                              time
                            </InputLabel>
                            <Select
                              native
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              value={TourTime}
                              onChange={handleChangeOfTourTime}
                              label="time"
                            >
                              <option aria-label="None" value="" />

                              {workingHours.map((h) => (
                                <option value={h}>{h}</option>
                              ))}
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid xs={2} item>
                          <IconButton
                           onClick={handleReduceOfTimeChosen}
                            aria-label="delete"
                          >
                            <ClearIcon />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </Grid>:null}
                    {TimeChosen>2?<Grid xs={12} item>
                      <Grid spacing={2} container>
                        <Grid xs={5} item>
                          <FormControl
                            variant="outlined"
                            className={classes.formControl}
                            fullWidth
                          >
                            <InputLabel id="demo-simple-select-outlined-label">
                              Date
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              value={TourDate}
                              onChange={handleChangeOfTourDate}
                              label="Date"
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              {workingDays.map((day) => (
                                <MenuItem value={day}>{day}</MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid xs={4} item>
                          <FormControl
                            variant="outlined"
                            className={classes.formControl}
                            fullWidth
                          >
                            <InputLabel id="demo-simple-select-outlined-label">
                              time
                            </InputLabel>
                            <Select
                              native
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              value={TourTime}
                              onChange={handleChangeOfTourTime}
                              label="time"
                            >
                              <option aria-label="None" value="" />

                              {workingHours.map((h) => (
                                <option value={h}>{h}</option>
                              ))}
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid xs={2} item>
                          <IconButton
                            aria-label="delete"
                            onClick={handleReduceOfTimeChosen}
                          >
                            <ClearIcon />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </Grid>:null}
                    {TimeChosen<3 ?<Grid xs={12} item>
                    <Button onClick={handleAddOfTimeChosen} disableRipple color="primary">
                    + Add another (up to 3)
                    </Button>

                    </Grid>:null}
                    <Grid xs={12} item>
                      <TextField
                        id="outlined-multiline-static"
                        label="Message"
                        multiline
                        rows={4}
                        defaultValue="I saw your rental listing at Samsara and would like to learn more. I'm looking for a 2BR in the range of $2,900 to $4,100."
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <Typography className={classes.terms}>
                        By sending this inquiry, I accept Samsara's{" "}
                        <Link href="#" onClick={preventDefault}>
                          Terms and Conditions
                        </Link>{" "}
                        and{" "}
                        <Link href="#" onClick={preventDefault}>
                          Privacy Policy
                        </Link>{" "}
                        and{" "}
                        <Link href="#" onClick={preventDefault}>
                          Community Values
                        </Link>
                        .
                      </Typography>
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
            </Grid>

            <Grid xs={4} className={classes.propretyInfo} item>
              <Grid xs={12} item>
                <Grid style={{ display: "flex" }} justify="flex-end" container>
                  <IconButton
                    style={{ position: "absolute" }}
                    aria-label="delete"
                  >
                    <ClearIcon />
                  </IconButton>
                </Grid>
              </Grid>
              <Grid container>
                <Grid xs={12} item>
                  <Grid style={{ display: "flex" }} container>
                    <Grid
                      className={classes.info}
                      style={{
                        backgroundImage:
                          "url(https://img.zumpercdn.com/380573004/1280x960?auto=format&fit=crop&h=64&w=64&dpr=1)",
                      }}
                      item
                    />

                    <Grid xs={12} item>
                      <Grid container>
                        <Grid xs={12} style={{ padding: "15px 0 9px" }} item>
                          <Typography
                            className={classes.price}
                            variant="h5"
                            component="span"
                          >
                            $1,065—$3,946
                          </Typography>
                        </Grid>
                        <Grid xs={12} className={classes.nameContainer} item>
                          <Typography className={classes.name}>
                            2660 at Cityplace
                          </Typography>
                          <CheckCircleIcon
                            height="15"
                            width="15"
                            style={{ marginLeft: "5px" }}
                            color="primary"
                          />
                        </Grid>
                        <Grid xs={12} className={classes.phoneContainer} item>
                          <PhoneInTalkIcon
                            height="15"
                            width="15"
                            style={{ marginRight: "5px" }}
                            color="primary"
                          />
                          <Link
                            className={classes.phone}
                            onClick={preventDefault}
                          >
                            (682) 564-1803
                          </Link>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid xs={12} className={classes.hoursText} item>
                      Open today
                    </Grid>
                    <Grid xs={12} className={classes.hoursToday} item>
                      9 am - 6 pm
                    </Grid>
                    <Grid xs={12} item>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography className={classes.heading}>
                            Show Full Hours
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Grid container>
                            <Grid xs={12} item>
                              <Grid justify="space-between" container>
                                <Grid xs={5} item>
                                  Monday{" "}
                                </Grid>
                                <Grid xs={7} item>
                                  {" "}
                                  9 am - 6 pm
                                </Grid>
                              </Grid>
                              <Grid justify="space-between" container>
                                <Grid xs={5} item>
                                  Tuesday{" "}
                                </Grid>
                                <Grid xs={7} item>
                                  {" "}
                                  9 am - 6 pm
                                </Grid>
                              </Grid>
                              <Grid justify="space-between" container>
                                <Grid xs={5} item>
                                  Wednesday{" "}
                                </Grid>
                                <Grid xs={7} item>
                                  {" "}
                                  9 am - 6 pm
                                </Grid>
                              </Grid>
                              <Grid justify="space-between" container>
                                <Grid xs={5} item>
                                  Thursday{" "}
                                </Grid>
                                <Grid xs={7} item>
                                  {" "}
                                  9 am - 6 pm
                                </Grid>
                              </Grid>
                              <Grid justify="space-between" container>
                                <Grid xs={5} item>
                                  Friday{" "}
                                </Grid>
                                <Grid xs={7} item>
                                  {" "}
                                  9 am - 6 pm
                                </Grid>
                              </Grid>
                              <Grid justify="space-between" container>
                                <Grid xs={5} item>
                                  Saturday{" "}
                                </Grid>
                                <Grid xs={7} item>
                                  {" "}
                                  9 am - 6 pm
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid justify="space-between" container>
                              <Grid xs={5} item>
                                Sunday{" "}
                              </Grid>
                              <Grid xs={7} item>
                                {" "}
                                9 am - 6 pm
                              </Grid>
                            </Grid>
                          </Grid>
                        </AccordionDetails>
                      </Accordion>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          xs={12}
          className={`${classes.formRow} ${classes.bottomBar}`}
          item
        >
          <Grid container>
            <Grid xs={8} item>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state}
                    onChange={handelStateChange}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Create an alert for listings like this"
              />
            </Grid>
            <Grid xs={4} item>
              <Grid container>
                <Grid xs={5} style={{ display: "flex" }} item>
                  <Button className={classes.secondaryBut} variant="contained">
                    Cancel
                  </Button>
                </Grid>
                <Grid xs={7} style={{ display: "flex" }} item>
                  <Button
                    className={classes.primaryBut}
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Check Availabelty
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default RequestForm;
