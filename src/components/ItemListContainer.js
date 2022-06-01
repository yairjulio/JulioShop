import ItemList from './ItemList.js';
import fetch from '../fetch.js'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const { productos } = require('../productos.js');


const ItemListContainer = () => {
    
    const [datos, setDatos] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        fetch(2000,id ? productos.filter(item => item.categoryId === parseInt(id)) : productos)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    },[id]);
    
    return(
        <>
            <ItemList items={datos} />
        </>
    )
}

export default ItemListContainer