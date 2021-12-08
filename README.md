# Lotus Store Argentina

## Introducción

Se trata de un proyecto de e-commerce para el curso de React de Coderhouse.

## Instalación e Implementación

El sitio fue creado utilizando ReactJS. Aunque también se usaron otras librerías y herramientas que aportaron tanto una funcionalidad como una visualización complementaria.

- [React](https://reactjs.org/)
- [Javascript](https://www.javascript.com/)
- [CSS](https://www.w3.org/Style/CSS/Overview.en.html)
- [React Router](https://v5.reactrouter.com/web/guides/quick-start)
- [Firebase](https://firebase.google.com/)

# Presentación y Uso

##  Página de inicio

El sitio "Lotus Cars" está enfocado en informar a potenciales clientes sobre los autos de la marca Lotus disponibles para su compra. Las personas acceden inicialmente a una página principal donde pueden ver todos los vehículos actualmente presentes en el negocio. Luego tienen la opción de tanto filtrar por categorías ("Nafta" o "Eléctrico") según su preferencia o directamente acceder a los detalles de cada vehículo.

![inicio](https://github.com/TomasCasserly/React/blob/master/src/components/inicio.PNG)

### Detalle del vehículo

Una vez en el detalle del vehículo, se podrá ver el nombre del mismo, su descripción y precio. En la misma página se podrá elegir cuántas unidades de ese vehículo se desean agregar al carrito (aquí llamado "garage"). Una vez que se agregan vehículos al garage, se habilitará un botón que llevará al cliente al carrito para ver qué ha seleccionado hasta el momento. La persona puede tanto hacer click aquí, o seguir navegando el sitio para ver y/o agregar otros vehículos a su garage.

![detalle](https://github.com/TomasCasserly/React/blob/master/src/components/detalle.PNG)

### Garage

Uno puede acceder a su garage tanto desde el detalle del vehículo, como desde cualquier parte del sitio, donde encontrará un ícono de carrito el cual lo llevará a su garage en cualquier momento. Si no ha seleccionado vehículos, se mostrará un mensaje que indique esto, y lo invitará a volver al menú principal para que pueda ver los vehículos disponibles.

Si, sin embargo, ha seleccionado uno o más vehículos para comprar, aquí los podrá ver, indicando cuántos lleva de cada uno y su total. Si desea remover algún modelo de su garage, puede hacerlo haciendo click en "Remover Lotus". Si desea remover todos los vehículos de su garage, puede hacerlo haciendo click en "Vaciar el Garage".

![garage](https://github.com/TomasCasserly/React/blob/master/src/components/garageSalida.PNG)

### Checkout

Una vez que está satisfecho con su elección, debe hacer click en el botón "Finalizar Compra", mostrado debajo de su lista de vehículos. Al hacer esto se le habilitará un formulario para que ingrese sus datos y se le mostrará su número de orden de compra.

![checkout](https://github.com/TomasCasserly/React/blob/master/src/components/checkout.PNG)


