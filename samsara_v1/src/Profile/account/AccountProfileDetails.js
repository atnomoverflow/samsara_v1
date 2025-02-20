import React from 'react';
import { useState ,useEffect} from 'react';
import {useAuth} from '../../contexts/AuthContext';

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@material-ui/core';
import { db } from '../../firebase';
import { bool } from 'prop-types';

const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  }
];

const AccountProfileDetails = (props) => {
  const [loading, setLoading] = useState([])

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const {currentUser}=useAuth();
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");


  useEffect(() => {
    const getPostsFromFirebase =[];
    const subscriber = db
      .collection("users")
      .onSnapshot((querySnaphot) => {
        querySnaphot.forEach(doc => {
          if(doc.id == currentUser.uid){
            setFirstName(doc.data().firstName);
            setLastName(doc.data().lastName);
            setEmail(doc.data().email);
            setPhone(doc.data().phone);
            setCountry(doc.data().country);
            setState(doc.data().state);
          }
          
        });
        setLoading(false)
      })

    return () => {
      subscriber();
    }
  }, [loading])

  function updateProfile(){
     db.collection("users").doc(currentUser.uid).set({
     firstName:firstName,
     lastName:lastName,
     email:currentUser.email,
     phone:phone,
     country:country,
     state:state
     })
    
  }


  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
      
    >x  
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="First name"
                name="firstName"
                onChange={(e) => {setFirstName(e.target.value)}}
                required
                value={firstName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Last name"
                name="lastName"
                onChange={(e) => {setLastName(e.target.value)}}
                required
                value={lastName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={(e) => {setEmail(e.target.value)}}
                required
                value={currentUser.email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                onChange={(e) => {setPhone(e.target.value)}}
                type="number"
                value={phone}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Country"
                name="country"
                onChange={(e) => {setCountry(e.target.value)}}
                required
                value={country}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
                      <TextField
                      fullWidth
          id="outlined-select-currency-native"
          select
          required
          label="Select State"
          value={state}
          onChange={(e) => {setState(e.target.value)}}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
          variant="outlined"
        >
          {states.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={updateProfile}
          >
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default AccountProfileDetails;
