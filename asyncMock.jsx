import img1 from '/src/assets/img/becca-shoes.webp';
import img2 from '/src/assets/img/katekub.webp';
import img3 from '/src/assets/img/miss-rock-1.webp';

const products =[
    {
        id: '1', 
        name: "Miss-rock-1",
        price: 15899,
        stock: 5, 
        category: "verano", 
        img: img1,
        description: "Sandalias con taco chino rosa-doradas"
    },
    {
        id: '2', 
        name: "Becca-shoes", 
        price: 304085,
        description: "Botineta con taco alto", 
        stock: 5, 
        category: "primavera", 
        img: img2
    },
    {
        id: '3', 
        name: "katekub",
        price: 31595, 
        description: "Borcego caña media", 
        stock: 5, 
        category: "invierno",
        img: img3
    },
]

export const getProducts = () =>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(products)
        }, 500)
    })
}
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}
export const getProductById = (productId) => {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}
