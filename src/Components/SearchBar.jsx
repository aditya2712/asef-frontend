import React from 'react'
import {Box , Button ,Select,MenuItem} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
const useStyles = makeStyles({
    wrapper:{
        border:'1px solid #168aad',
        backgroundColor:'#fff',
        display: 'flex',
        boxShadow: '0px 1px 5px rgba(0,0,0,0.1)',
        borderRadius:'5px',
        "& > *":{
            flex:1,
            height:'45px',
            margin:'8px',
        },
        }

})
const SearchBar = (props) => {
    const classes=useStyles();

    return (
     <Box p={0.5} mt={-5} mb={2} className={classes.wrapper}>
         <Select variant='outlined' defaultValue='fullTime'>
             <MenuItem value='fullTime'>Full Time</MenuItem>
             <MenuItem value='partTime'>Part Time</MenuItem>
             <MenuItem value='contract'>Contract</MenuItem>
         </Select>
   
         <Select variant='outlined' defaultValue="remote">
             <MenuItem value='remote'>Remote</MenuItem>
             <MenuItem value='inOffice'>In Office</MenuItem>
             <MenuItem value='contract'>Contract</MenuItem>
         </Select>
         <Button variant='contained' style={{backgroundColor:'#001524',color:'#fff'}}> Search </Button>
       
         
     </Box>
    )
}

export default SearchBar
