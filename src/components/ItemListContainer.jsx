//el ItemListContainer recibe su props greeting y la muestra en la linea 7
//componente contenedor- orientado al funcionamiento de la aplicacion
import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const {categoriaId} = useParams()

    useEffect(() => {
        const obtenerProductos = async () => {

            const db = getFirestore();

            const productosCollection = collection(db, "temporada 2023");


            const q = categoriaId ? query(productosCollection, where("categoria", "==", categoriaId)) : productosCollection;

            const productosSnapshot = await getDocs(q);
            
            const productosList = productosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setProducts(productosList);
        }
        obtenerProductos();
    }, [categoriaId])

    return (
        <div>
            <h1 className='title'>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer



