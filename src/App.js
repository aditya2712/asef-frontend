import React,{useState} from "react";
import { Box, Grid } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter as Router , Switch , Route , Link } from "react-router-dom";
import theme from "./theme/theme";
import JobModal from "./Components/Jobs/JobModal";
import Location from "./Components/Location";
import UserForm from "./Components/UserForm";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import JobCard from "./Components/JobCard";
import jobData from "./dummyData";
import SignIn from "./Components/SignIn/SignIn";
import {GetLocation} from "./Components/Location"



function App(){
  
	return (
		<Router>
			<Switch>
				<Route path='/signin' component={SignIn} />

				<ThemeProvider props={theme}> 
					<Location />

					<Header/>
					
					<Grid container justify='center'>
						<Grid item xs={10}>
							<SearchBar/>
							<JobCard title={'Writer'} companyName={'Punjab News'} skill={'RawalPindi'} distance={'200m away from here'} type={'Full time| Remote'}/>
							<JobCard title={'CopyWriter'} companyName={'Nestlé'} skill={'Lahore'} distance={'250m away from here'} type={'Full time'}/>
							<JobCard title={'Accountant'} companyName={'Punjab Power'} skill={'Punjab'} distance={'500m away from here'} type={'Full time | In Office'}/>
							{
								jobData.map(job => 
									<JobCard 
										key={job.id}
										title={job.title} 
										companyName={job.companyName} 
										skill={job.skill}
										distance={job.distance}
										type={job.type}
									></JobCard>
								)
							}
						</Grid>
					</Grid>

					<JobModal />
				</ThemeProvider> 
			</Switch>
		</Router>
	)
  
};

export default App;