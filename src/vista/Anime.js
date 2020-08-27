import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const Anime = props => {
    const {id} = useParams();
    const [state, setState] = useState({
      anime: null
    })
    console.log(id);

    useEffect(() => {
      fetch('https://kitsu.io/api/edge/anime/' + id)
      .then((res) => res.json())
      .then((data) => {
        setState(s => ({ ...s, anime: data.data}))
      })
    }, [id])

    return (
        <div>
          <div className="col-6 offset-3">
            <Link to="/">Volver a la lista</Link>
          </div>
          <div className="col-6 offset-3">
          {
            state.anime === null ? <div></div> : (
              <div className="media">
                  <img 
                    style={{ maxWidth: '300px'}}
                    src={state.anime.attributes.coverImage
                      ? state.anime.attributes.coverImage.original
                      : ""}
                    className="mr-3" alt="..." />
                  <div className="media-body">
                      <h5 className="mt-0">{state.anime.attributes.synopsis }</h5>
                  </div>
              </div>
            )
          }
          </div>
        </div>
    )
}




export default Anime;