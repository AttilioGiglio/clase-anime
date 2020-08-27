import React from 'react'
import { Link } from 'react-router-dom';

const ResumenAnime = ({nombre, anime_id, img}) => {
    return (
      <div className="card animate__animated animate__fadeIn" style={{ cursor: 'pointer' }}>
        <img src={img} alt={nombre}  className="img-fluid"/>
        <p>{nombre}</p>
        <Link to={"/Anime/"+anime_id}>Go somewhere</Link>
        <p>{anime_id}</p>
      </div>
    );
}

export default ResumenAnime
