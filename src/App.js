import { db } from "./firebase/config";
import { useEffect, useState } from "react";
import './App.css';
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [movieList, setMovieList] = useState([])
  const [error, setError] = useState(false)

// Get a list of cities from your database
async function getMovies(db) {
  const moviesCol = collection(db, 'movies');
  const citySnapshot = await getDocs(moviesCol);
  const moviesList = citySnapshot.docs.map(doc => doc.data());
  return moviesList;
}

getMovies()

const pokus = async () => {
  const movies = await getMovies(db)
  console.log(movies)
}
pokus()






  return (
    <div className="App">
      <h1>Movie List</h1>
    </div>
  );
}

export default App;
