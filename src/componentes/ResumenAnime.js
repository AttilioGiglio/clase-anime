import React from 'react'

const ResumenAnime = ({nombre, url, img}) => {
    return (
      <div className="card animate__animated animate__fadeIn" style={{ cursor: 'pointer' }}>
        <img src={img} alt={nombre}  className="img-fluid"/>
        <p>{nombre}</p>
        <p>{url}</p>
      </div>
    );
}

export default ResumenAnime
