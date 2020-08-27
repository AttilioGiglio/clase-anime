import React, {useEffect,useState} from 'react';
import ResumenAnime from '../componentes/ResumenAnime';



const Home = () => {

    
    const [state, setState] = useState(
        {
            animes: [],
            allAnimes: []
        });
    
    const NuevaFuncion =(event) =>{
        event.preventDefault();
        if (event.target.elements.filter.value === '') {
          if (state.animes.length !== state.allAnimes) {
            setState(s=>({
              ...s,
              animes: state.allAnimes,
          }))
          }
          return;
        }
        const cloneAnimes = state.allAnimes.filter((item) => {
          return item.attributes.titles && item.attributes.titles.en && item.attributes.titles.en.toLowerCase().includes(event.target.elements.filter.value.toLowerCase())
        });
        setState(s=>({
          ...s,
          animes: cloneAnimes,
        }))
    } 
    useEffect (() => {
        fetch('https://kitsu.io/api/edge/anime')
        .then ((resp) => resp.json())
        .then ((datos) => {
           setState(s=>({
               ...s,
               animes: datos.data,
               allAnimes: datos.data
           }))
           
        })
    }, [])

    
    console.log(state)
    return (
      <>
        <form onSubmit={NuevaFuncion}>
          <input type="text" name="filter" className="form-control" />
          <button type="submit" className="btn btn-primary">
            Buscar
          </button>
        </form>

        <div className="row">
          {state.animes.map((ani, id) => {
            console.log(ani)
            return (
              <div className="col-4" key={id}>
                <ResumenAnime
                  nombre={ani.attributes.titles.en}
                  anime_id={ani.id}
                  img={
                    ani.attributes.coverImage
                      ? ani.attributes.coverImage.original
                      : ""
                  }
                />
              </div>
            )
          })}
        </div>
      </>
    );
}
export default Home;