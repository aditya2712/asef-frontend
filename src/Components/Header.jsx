import React from 'react'
import {Box,Button, Typography ,Grid } from '@material-ui/core'
import { useState } from 'react'


const Header = () => {
    return (
        <Box py={8} bgcolor='secondary.main' color='white' >
            <Grid container justify='center'>
                <Grid item xs={10}>
                    <Box display='flex' justifyContent='space-between'>  
                        <Typography variant="h4">Jobs Nearby </Typography>
                        <Button variant='contained' color='primary' >Post a Job </Button>
                    </Box>
                   
            </Grid>
            
        </Grid>
        </Box>
    )
}

export default Header