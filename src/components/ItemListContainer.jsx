//el ItemListContainer recibe su props greeting y la muestra en la linea 7

import React from 'react'

const ItemListContainer = ({ greeting }) => {
    return (
        <h1 className="Title">{greeting}</h1>
    )
}

export default ItemListContainer
