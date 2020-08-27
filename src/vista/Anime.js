import React from 'react';
import { useParams } from 'react-router-dom';

const Anime = props => {
    const {id} = useParams();
    console.log(id)

    return (
        <>
            <div className="media">
                <img src="..." className="mr-3" alt="..." />
                <div className="media-body">
                    <h5 className="mt-0">{id}</h5>
                </div>
            </div>
        </>
    )
}




export default Anime;