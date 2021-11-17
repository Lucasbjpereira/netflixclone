import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow/MovieRow';
import './App.css';
import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie';

export default function App() {

  const [movieList, setMoviewList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      // Capturando a lista
      let list = await Tmdb.getHomeList();
      setMoviewList(list);

      // Capturando o filme em destaque
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');

      setFeaturedData(chosenInfo)
    }

    loadAll();
  }, []);

  return (
    
    <div className="page">
      {featuredData && 
        <FeaturedMovie item={featuredData}/>
      }
      
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} content={item.items}/>
        ))}
      </section>
    </div>
  );
}