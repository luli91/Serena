import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { getProductById } from '../../asyncMock'
import { useParams } from 'react-router-dom'



const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams ()

    useEffect(() => {
        getProductById(itemId)
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [itemId])

    return (
        <div>
            {product && <ItemDetail {...product} />} 
        </div>
    )
}

export default ItemDetailContainer
