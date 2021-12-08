# Lotus Store Argentina

## Introducción

Se trata de un proyecto de e-commerce para el curso de React de Coderhouse.

## Instalación e Implementación

El sitio fue creado utilizando ReactJS. Aunque también se usaron otras librerías que aportaron tanto una funcionalidad como una visualización complementaria.

- React(https://reactjs.org/)
- Javascript(https://www.javascript.com/)
- CSS(https://www.w3.org/Style/CSS/Overview.en.html)
- React Router Dom(https://v5.reactrouter.com/web/guides/quick-start)
- Firebase(https://firebase.google.com/)

## Presentación y Uso

###  Página de inicio

El sitio "Lotus Cars" está enfocado en informar a potenciales clientes sobre los autos de la marca Lotus disponibles para su compra. Las personas acceden inicialmente a una página principal donde pueden ver todos los vehículos actualmente presentes en el negocio. Luego tienen la opción de tanto filtrar por categorías ("Nafta" o "Eléctrico") según su preferencia o directamente acceder a los detalles de cada vehículo.

![Página de inicio] (./src/components/inicio.PNG)

### Detalle del vehículo

Una vez en el detalle del vehículo, se podrá ver el nombre del mismo, su descripción y precio. En la misma página se podrá elegir cuántas unidades de ese vehículo se desean agregar al carrito (aquí llamado "garage"). Una vez que se agregan vehículos al garage, se habilitará un botón que llevará al cliente al carrito para ver qué ha seleccionado hasta el momento. La persona puede tanto hacer click aquí, o seguir navegando el sitio para ver y/o agregar otros vehículos a su garage.

### Garage

Uno puede acceder a su garage tanto desde el detalle del vehículo, como desde cualquier parte del sitio, donde encontrará un ícono de carrito el cual lo llevará a su garage en cualquier momento. Si no ha seleccionado vehículos, se mostrará un mensaje que indique esto, y lo invitará a volver al menú principal para que pueda ver los vehículos disponibles.

Si, sin embargo, ha seleccionado uno o más vehículos para comprar, aquí los podrá ver, indicando cuántos lleva de cada uno y su total. Si desea remover algún modelo de su garage, puede hacerlo haciendo click en "Remover Lotus". Si desea remover todos los vehículos de su garage, puede hacerlo haciendo click en "Vaciar el Garage".

### Checkout

Una vez que está satisfecho con su elección, debe hacer click en el botón "Finalizar Compra", mostrado debajo de su lista de vehículos. Al hacer esto se le habilitará un formulario para que ingrese sus datos y se le mostrará su número de orden de compra.





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
