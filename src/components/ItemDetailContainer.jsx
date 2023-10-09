import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { itemId } = useParams(); 
    useEffect(() => {
        const getProduct = async () => {
            if (!itemId) {
                console.log('El ID del producto no puede ser nulo');
                return;
            }

            const db = getFirestore();
            try {
                const productDoc = await getDoc(doc(db, 'temporada 2023', itemId));

                if (productDoc.exists()) {
                    setProduct({ id: productDoc.id, ...productDoc.data() });
                } else {
                    console.log('No se encontró el producto');
                }
            } catch (error) {
                console.error('Error al obtener el documento:', error);
            }
        };

        getProduct();
    }, [itemId]); 

    return product ? <ItemDetail {...product} /> : 'Cargando producto...';
};

export default ItemDetailContainer;




