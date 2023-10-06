//el ItemListContainer recibe su props greeting y la muestra en la linea 7
//componente contenedor- orientado al funcionamiento de la aplicacion

// import ItemCount from './ItemCount'
import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()
//obtengo los productos mediante la funcion getProduct 
    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
        .then(response => {
            setProducts(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [categoryId])

    return (
        <div>
            <h1 className='title'>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )

    
}

export default ItemListContainer
//     //el contenedor procesa la info con el fetch de la apí
// //como traer productos de una API
// const getProducts = async () => {
//     const response = await fetch("https://fakestoreapi.com/products")
//     //console.log(response)
//     const data = await response.json()
    

//     return data
// }
// //la carga en un estado
// const [product, setProduct] = useState([])

// //ejecuta la promesa con useEffect
// useEffect(() => {
//     getProducts().then((product) => setProduct(product))
// }, [])

// const {categoria} = useParams()
    // console.log(categoria)

    // const productos =[
    //     {id: 1, nombre: "Miss-rock-1", descripcion: "Sandalias con taco chino rosa-doradas", stock: 5, categoria: "verano", img: img1},
    //     {id: 2, nombre: "Becca-shoes", descripcion: "Botineta con taco alto", stock: 5, categoria: "primavera", img: img2},
    //     {id: 3, nombre: "katekub", descripcion: "Borcego caña media", stock: 5, categoria: "invierno", img: img3},
    // ]

    // const getProductos =  new Promise((resolve,reject)=>{
    //         if (productos.length > 0){
    //         setTimeout (()=>{
    //             resolve(productos)
    //         }, 5000)
    //     }else {
    //         reject(new Error("No hay productos para mostar"))
    //     }
    // })

    // getProductos
    // .then((res)=>{
    // })
    // .catch((error) => {
    //     console.log(error)
    // })

    // const filteredProducts = productos.filter((producto)=> producto.categoria === categoria)
    // const [products, setProducts] = useState([])
    
    // useEffect (()=> {
    //     getProducts()
    //         .then(response => {
    //             setProducts(response)
    //         })
    //         .catch(error => {
    //             console.error(error)
    //         })
    // }, [])

    // return (
    //     <>
    //     <h1 className='title'>{greeting}</h1>

    //         {/* {
                
    //             categoria ? <ItemList productos={filteredProducts} /> : <ItemList productos={productos} />
    //         }
    //      */}
    //     </>
    //)