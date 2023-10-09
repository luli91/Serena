# Mi Proyecto de E-Commerce en React

Este proyecto es una aplicación de comercio electrónico de venta de zapatos de mujer construida con React. La aplicación incluye varias características y componentes.

## Características

- **NavBar**: Este componente incluye un botón de categorías que filtra los productos por categoría y un carrito de compras. El botón de categorías permite a los usuarios ver productos específicos basados en su categoría. El carrito de compras en la barra de navegación muestra la cantidad total de productos agregados al carrito.

- **CartWidget**: Este componente muestra el carrito de compras y la cantidad total de productos agregados al carrito. Cuando un usuario agrega un producto al carrito, este componente se actualiza para reflejar la cantidad total de productos en el carrito.

- **ItemListContainer, ItemList e Item**: Estos componentes se utilizan para mostrar todos los productos. Cada producto tiene una tarjeta con su foto, nombre y un botón de detalles. Cuando un usuario hace clic en el botón de detalles, es llevado a una página con más detalles sobre ese producto específico.

- **ItemDetailContainer e ItemDetail**: Estos componentes muestran los detalles del producto seleccionado, incluyendo la categoría y el precio. Cuando un usuario hace clic en el botón de detalles en la tarjeta del producto, es llevado a una página con estos detalles.

- **ItemCount**: Este componente se utiliza para contar la cantidad de un producto específico que se agrega al carrito. Permite a los usuarios seleccionar cuántas unidades de un producto quieren agregar al carrito.

- **CartContext y CartProvider**: Estos componentes se utilizan para manejar el estado global del carrito de compras. Permiten agregar y eliminar productos del carrito, limpiar el carrito, verificar si un producto está en el carrito y calcular el total del carrito.

## Datos

Los datos de los productos se almacenan en Firebase. La aplicación recupera estos datos para mostrar los productos disponibles.

## Instalación

Para instalar las dependencias necesarias para este proyecto, primero debes instalar Vite, Chakra UI, React Router DOM y Firebase. Puedes hacerlo con los siguientes comandos:

```bash
npm install create-vite
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
npm install react-router-dom
npm install firebase
