import React from 'react'
import Row from './Components/row/Row'
import NavBar from './Components/navbar/NavBar'
import Banner from './Components/banner/Banner'
import './App.css'
import Requests from './Components/requests/Requests'

const App = () =>{
  return(
    <div className="app">
      <NavBar></NavBar>
      <Banner />
      <Row title='Trending' fetchUrl={Requests.fetchTrending}/>
      <Row title='Top Rated' fetchUrl={Requests.fetchTopRated}/>
      <Row title='Comedy Movies' fetchUrl={Requests.fetchComedyMovies}/>
      <Row title='Drama Movies' fetchUrl={Requests.fetchDramaMovies}/>
      <Row title='Action Movies' fetchUrl={Requests.fetchActionMovies}/>
      <Row title='Sci Fi Movies' fetchUrl={Requests.fetchSciFiMovies}/>
      <Row title='Animation Movies' fetchUrl={Requests.fetchAnimatedMovies}/>
      <Row title='Mystery Movies' fetchUrl={Requests.fetchMysteryMovies}/>
      </div>
  )
}

export default App