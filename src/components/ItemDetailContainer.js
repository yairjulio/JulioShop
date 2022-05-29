import ItemDetail from './ItemDetail.js';
import fetch from '../fetch.js'
import { useEffect, useState } from 'react';
const { productos } = require('../productos.js');


const ItemDetailContainer = () => {
    
    const [dato, setDato] = useState([]);
    
    useEffect(() => {
        fetch(2000,productos[1])
            .then(result => setDato(result))
            .catch(err => console.log(err))
    },[]);
    
    return(
        <>
            <ItemDetail item={dato} />
        </>
    )
}

export default ItemDetailContainer