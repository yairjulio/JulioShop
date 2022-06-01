import ItemDetail from './ItemDetail.js';
import fetch from '../fetch.js'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const { productos } = require('../productos.js');


const ItemDetailContainer = () => {
    
    const [dato, setDato] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(2000,productos.find(item => item.id === parseInt(id)))
            .then(result => setDato(result))
            .catch(err => console.log(err))
    },[id]);
    
    return(
        <>
            <ItemDetail item={dato} />
        </>
    )
}

export default ItemDetailContainer