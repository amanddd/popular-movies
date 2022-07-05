import './style.css'
import {useState, useEffect} from 'react'
import {Link} from "react-router-dom"

const keyApi = 'db56c7d25c5d1555a8662e33ec7ccff9'

function Home (){

    let url = `https://api.themoviedb.org/3/movie/popular?api_key=${keyApi}&language=en-US&page=1
    `
    const image = 'https://image.tmdb.org/t/p/w500/'
    const [movies, setMovies] = useState([])

    useEffect (() =>{
        fetch (url)
            .then(response => response.json())
            .then(data => setMovies(data.results))
    })
    return(
        <div>
            <div className='background'><h1>Movies</h1></div>
               
            <ul>
                {movies.map(movies => {
                    return( 
                    <li key={movies.id}> 
                        <Link to={`/details/${movies.id}`}><img src ={`${image}${movies.poster_path}`} /></Link>
                        
                        <span>{movies.title}</span>
                    </li>
                    )
            })}
            </ul>
        </div>
    )
}

export default Home;