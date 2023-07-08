/* eslint-disable import/no-anonymous-default-export */
import React, {useEffect, useState} from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/movierow';


export default () => {

  const [movieList, setMovielist] = useState([]);

  useEffect(() => {
    const loadAll = async () =>{

      // Pegando a lista TOTAL
      let list = await Tmdb.getHomelist();
      setMovielist(list);
      
    }

    loadAll();
  }, []);

  return(
    <div className="page">
      <section className="lists">
        {movieList.map((item, key) =>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div>
  )
}