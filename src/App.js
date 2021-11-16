import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow/MovieRow';
import './App.css';

export default function App() {

  const [movieList, setMoviewList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      // Capturando a lista
      setMoviewList(await Tmdb.getHomeList());
    }

    loadAll();
  }, []);

  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} content={item.items}/>
        ))}
      </section>
    </div>
  );
}