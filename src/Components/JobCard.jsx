import React from 'react'
import { Typography, Box ,Grid,Button, makeStyles} from '@material-ui/core'

const useStyles=makeStyles((theme)=>({
    wrapper:{
        border:'1px solid ',
        cursor:'pointer',
        transition:'.3s',
        fontSize:'100% ',
        "&:hover":{
            boxShadow:'0px 5px 25px rgba(0,0,0,0.1)',
            borderLeft:'6px solid #4D64E4'

        },
        companyName:{
            fontSize:'20px .5px ',
            backgroundColor:theme.palette.primary.main,
            padding:theme.spacing(0.75),
            borderRadius: '5px',
            display:'inline-block',
            fontWeight:600
        }
    }
}))

const JobCard = (props) => {
    const classes =useStyles();
    return (
      <Box p={2} className={classes.wrapper}>
        <Grid container alignItems='center'>
            <Grid item xs>
                <Typography variant='subtitle1'>{props.title} </Typography>
                <Typography variant='subtitle2'>{props.companyName}</Typography>
            </Grid>
{/* This grid will act as the item for its parent and parent for innner ones */}
            <Grid item container xs>
              <Grid key={9*Math.random()} item > {props.skill} </Grid>
                                                           
                                
            </Grid>

            <Grid container item direction='column' alignItems='flex-end' xs>
                <Grid item >
                    <Typography variant='caption'>{props.distance}|{props.type} </Typography>
                </Grid>
                <Grid item><Box mt={2}>
                    <Button variant='outlined'>Check</Button>
                    </Box>
                </Grid>
            </Grid>

        </Grid>

      </Box>
    )
}

export default JobCard
