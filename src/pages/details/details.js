import {useParams, Link} from "react-router-dom"
import {useState, useEffect} from 'react'
import './style.css'

function Details (){

    const keyApi = 'db56c7d25c5d1555a8662e33ec7ccff9'
    const {id} = useParams()
    const [movies, setMovies] = useState({})
    const image = 'https://image.tmdb.org/t/p/w500/'
    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${keyApi}&language=en-US&page=1`

    useEffect (() =>{
        fetch (url)
        .then(response => response.json())
        .then(data => {
            const movies = {
                id,
                title: data.title,
                sinopse: data.overview,
                image: `${image}${data.poster_path}`,
                release: data.release_date
            }
            setMovies(movies)
            console.log(movies)
            
        }) 
    }, [id])

    return(
        <div className="movie">
            <img src={movies.image} alt={movies.title}/>
            <div className="details">
                <h1>{movies.title}</h1>
                <span>Sinopse: {movies.sinopse}</span>
                <span className="release">{movies.release}</span>
                <Link to='/'><button>Go back</button></Link>
            </div>
        </div>
    )
}

export default Details