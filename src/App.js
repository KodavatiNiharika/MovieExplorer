import {useState,useEffect} from 'react';
import MovieCard from './MovieCard';
import './App.css'

import SearchIcon from './search.svg'
const API_URL = 'http://www.omdbapi.com?apikey=4ee9bd70'
const movie1 = {
    "Title": "The Amazing Spiderman 2 Webb Cut",
    "Year": "2021",
    "imdbID": "tt18351128",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYzYzZDViNWYtNWViMS00NDMxLThlN2YtZjFkOWMwODkzNzhiXkEyXkFqcGdeQXVyMTUwMzM4NzU0._V1_SX300.jpg"
}

const App = () =>{

    const [movies, setMovies] = useState([]);
    const [searchTerm,setSearchTerm] = useState('');
    const searchMovies = async(title) =>{
            const response = await fetch(`${API_URL}&s=${title}`)
            const data = await response.json();
            setMovies(data.Search);
        }
        useEffect(() =>{
            searchMovies('Spiderman');
        },[]);
    return(
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChangeCapture={(e) => setSearchTerm(e.target.value)}
                    onChange={() => {}}
                />
                <img src={SearchIcon}
                alt="search"
                onClick={() => searchMovies(searchTerm)}/>
            </div>
        {
            movies?.length>0
            ?(
                <div className='container'>
                    {movies.map((movie) =>(
                        <MovieCard movie={movie}/>
                    ))}
                </div>
            ):(
                <div className='empty'>
                    <h2>NO Movies found</h2>
                </div>
            )
        }
        </div>
    );
}
export default App;
//4ee9bd70