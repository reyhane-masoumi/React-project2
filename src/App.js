import React from 'react';
import './App.css';
import Movie from "./components/Movie";
const axios = require('axios').default;
class App extends React.Component {
  state = {
    movie: {
        backdrop_path: '',
        production_companies:[],
        genres:[]
    }
    
};
componentWillMount() {
  this.getMovieDetails(117570)
}

getMovieDetails(id){
  axios.get('https://api.themoviedb.org/3/movie/'+ id + '?api_key=afb96b9738f60f3725583b1784cfaa0e')
      .then( (response) => {
          this.setState({movie:response.data})
          console.log(this.state.movie)
      })
      .catch( (error) => {
          console.log(error);
      })
      .finally( () =>{
      });
}

render() {
  const {movie} = this.state;
  return (
    <div className="App" style={{ flex:1,
        backgroundImage: `linear-gradient(to right, rgba(9, 66, 59, 0.5) 0%, rgba(9, 28, 37, 0.5) 100%),url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
    }}>
        <Movie movie={movie}/>
    </div>
);
}
}
export default App;
