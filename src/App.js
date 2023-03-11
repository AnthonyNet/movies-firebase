import { db } from "./firebase/config";
import { useEffect, useState } from "react";
import './App.css';
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(false)

// Get a list of cities from your database
async function getMovies(db) {
  const moviesCol = collection(db, 'movies');
  const movieSnapshot = await getDocs(moviesCol);
  const moviesList = movieSnapshot.docs.map(doc => doc.data());
  return setMovies(moviesList);
}

getMovies(db)


  return (
    <div className="App">
    <h2>filmy</h2>
    {movies.map((movie,index) => {
        return (
          <ul key={index}>
            <li>Title:{movie.title}</li>
            <li>Time:{movie.time}</li>
            <li>Age required:{movie.minAge}</li>
          </ul>
        )})}
    </div>
  );
}

export default App;
