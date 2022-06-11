import ItemDetail from './ItemDetail.js';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { firestoreFetchOne } from './firebaseFetch.js';


const ItemDetailContainer = () => {
    
    const [dato, setDato] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        firestoreFetchOne(id)
            .then(result => setDato(result))
            .catch(err => console.log(err));
    }, [id]);
    
    return(
        <>
            <ItemDetail item={dato} />
        </>
    )
}

export default ItemDetailContainer