import ItemList from './ItemList.js';
import fetch from '../fetch.js'
import { useEffect, useState } from 'react';
const { productos } = require('../productos.js');


const ItemListContainer = (props) => {
    
    const [datos, setDatos] = useState([]);
    
    useEffect(() => {
        fetch(2000,productos)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    },[]);
    
    return(
        <>
            <h1>Bienvenido {props.name}</h1>
            <ItemList items={datos} />
        </>
    )
}

export default ItemListContainer