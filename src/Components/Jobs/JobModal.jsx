import React, { useState } from "react";
import {
  Box,
  Select,
  Grid,
  FilledInput,
  MenuItem,
  Dialog,
  IconButton,
  DialogTitle,
  DialogContent,
  Checkbox,
  Typography,
  Button,
} from "@material-ui/core";
import {  Close as CloseIcon  } from '@material-ui/icons'
const JobModal = () => {
  const [show, setShow] = useState('false');
  const handleSubmit=()=>{
      setShow('');
  }
  
    return (
    <Dialog open={show} fullWidth>
      <DialogTitle  >
        <Box display='flex' justifyContent='space-between' alignItems='center'>
        Post Job
        <IconButton type='submit' onClick={handleSubmit}><CloseIcon/></IconButton>
        
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FilledInput placeholder="Job Title" fullWidth></FilledInput>
          </Grid>
          <Grid item xs={6}>
            <Select
              fullWidth
              disableUnderline
              variant="outlined"
              defaultValue="fullTime"
            >
              <MenuItem value="fullTime">Full Time</MenuItem>
              <MenuItem value="partTime">Part Time</MenuItem>
              <MenuItem value="contract">Contract </MenuItem>
            </Select>
          </Grid>

          <Grid item xs={6}>
            <FilledInput
              fullWidth
              variant="outlined"
              placeholder="Location"
            ></FilledInput>
          </Grid>
          <Grid item xs={6}>
            <FilledInput
              fullWidth
              variant="outlined"
              placeholder="Location"
            ></FilledInput>
          </Grid>
          <Grid item fullWidth xs={12}>
            <Select variant="outlined" fullWidth defaultValue="salaryRange">
              <MenuItem value="salaryRange">Salary Range</MenuItem>
              <MenuItem value="1">20K to 35K</MenuItem>
              <MenuItem value="2">35K to 55K</MenuItem>
              <MenuItem value="3">55K to 75K</MenuItem>
            </Select>
          </Grid>

          <Grid item>
            <Checkbox> </Checkbox>
          </Grid>
          <Grid item>
            <Typography variant="h6" fullWidth>
              {" "}
              We will ensure the Transportation for this Employee{" "}
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <FilledInput fullWidth placeholder="certifications of the company " />
          </Grid>

          <Grid item xs={6}>
            <FilledInput fullWidth placeholder="Job link" />
          </Grid>
          <Grid item xs={12}>
            <FilledInput
              fullWidth
              placeholder="Job Description"
              multiline
              rows={3}
            ></FilledInput>
          </Grid>

          <Grid item xs={9}>
            <Box color="red" display="flex" justifyContent="space-between">
              <Typography>*Required </Typography>
            </Box>
          </Grid>
          <Button variant="outlined" onClick={handleSubmit}>Post this Job</Button>

          <Grid item xs={12}></Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default JobModal;
